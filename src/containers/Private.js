import React from 'react';

import Toolbar from 'components/Toolbar';

const Private = ({children}) => (
  <React.Fragment>
    <Toolbar />
    { children }
  </React.Fragment>
);

export default Private;
