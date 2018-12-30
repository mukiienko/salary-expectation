import React from 'react';

import css from 'style/containers/App.module.scss';

const App = ({children}) => (
  <div className={css.app}>
    { children }
  </div>
);

export default App;
