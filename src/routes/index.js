import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import {checkLogin} from 'redux/modules/account';
import {isLoadingSelector} from 'redux/selectors/account';
import {useMappedState, useDispatcher} from 'utils/hooks/useRedux';
import {useMouted} from 'utils/hooks/behaviors';

import App from 'containers/App';
import Public from 'containers/Public';
import Private from 'containers/Private';
import Fetching from 'components/Fetching';
import Login from 'pages/Login';
import Salary from 'pages/Salary';

const mapState = state => ({
  isLoged: state.account.isLogged,
	isLoading: isLoadingSelector(state),
});

const Routes = () => {
  const {isLoged, isLoading} = useMappedState(mapState);
  const handleCheck = useDispatcher(checkLogin);
  useMouted(() => {
    handleCheck();
  });

  return (
    <BrowserRouter>
      <App>
        <Fetching isFetching={isLoading} />

        {isLoged &&
          <Private>
            <Switch>
              <Route path='/salary' component={ Salary } />
              <Redirect to='/salary' />
            </Switch>
          </Private>
        }
        {isLoged === false &&
          <Public>
            <Switch>
              <Route path='/login' component={ Login } />
              <Redirect to='/login' />
            </Switch>
          </Public>
        }
      </App>
    </BrowserRouter>
  );
}

export default Routes;
