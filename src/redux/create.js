import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './modules/reducers';

function configureStore() {
  const defaultMiddleware = [thunk];
  const middleware = applyMiddleware(...defaultMiddleware);
  // const createStoreWithMiddleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  const createStoreWithMiddleware = compose(middleware);

  const store = createStore(reducer, createStoreWithMiddleware);

  if (module.hot) {
    module.hot.accept('./modules/reducers', () => {
      store.replaceReducer(require('./modules/reducers')); // eslint-disable-line global-require
    });
  }

  return store;
}

export default configureStore();
