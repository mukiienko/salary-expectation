
import linkedinAPI from 'utils/api/linkedin';
import getValue from 'lodash/get';

const LOGIN = 'account/LOGIN';

const LOGOUT = 'account/LOGOUT';
const LOGOUT_SUCCESS = 'account/LOGOUT_SUCCESS';

const PROFILE = 'account/PROFILE';
const PROFILE_SUCCESS = 'account/PROFILE_SUCCESS';

const initialState = {
  isLogged: null,
  profile: {
    loading: false,
    loaded: false,
    data: {},
  },
  logout: {
    loading: false,
    loaded: false,
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: action.data,
      };
    case PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: true,
          loaded: false,
        },
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          loading: false,
          loaded: true,
          data: getValue(action.data, 'values[0]', {}),
        },
      };
    case LOGOUT:
      return {
        ...state,
        logout: {
          ...state.logout,
          loading: true,
          loaded: false,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLogged: false,
      };
      default:
      return state;
  }
}

export function checkLogin() {
  return async (dispatch) => {
    const data = await linkedinAPI.isAuthorized();
    dispatch({
      type: LOGIN,
      data,
    });
  }
}

export function login() {
  return async (dispatch) => {
    await linkedinAPI.authorize();
    dispatch(checkLogin());
  }
}

export function logout() {
  return async (dispatch) => {
    dispatch({type: LOGOUT});
    await linkedinAPI.logout();
    dispatch({type: LOGOUT_SUCCESS});
  }
}

export function saveProfile(data) {
  return {
    type: PROFILE_SUCCESS,
    data
  }
}

export function loadProfile() {
  return async (dispatch) => {
    dispatch({type: PROFILE});
    const data = await linkedinAPI.getProfile();
    dispatch(saveProfile(data));
  }
}
