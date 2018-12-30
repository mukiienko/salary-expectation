import {StoreContext, useDispatch, useMappedState} from 'redux-react-hook';

const useDispatcher = (action) => {
  const dispatch = useDispatch();
  return () => (dispatch(action()));
};

export {
  StoreContext,
  useMappedState,
  useDispatcher,
}
