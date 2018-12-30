import React from 'react';
import Button from '@material-ui/core/Button';

import {useDispatcher} from 'utils/hooks/useRedux';
import {logout} from 'redux/modules/account';

import css from 'style/components/Toolbar.module.scss';
import logo from 'images/logo.svg';

const Toolbar = () => {
  const handleLogout = useDispatcher(logout);

  return (
    <header className={css.toolbar}>
      <div className={css.toolbar__wrap}>
        <img className={css.toolbar__logo} src={logo} alt="logo" />
        <Button onClick={handleLogout} className={css.toolbar__logout}>LogOut</Button>
      </div>
    </header>
  );
};

export default Toolbar;
