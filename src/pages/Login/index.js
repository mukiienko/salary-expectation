import React from 'react';
import Button from '@material-ui/core/Button';

import {login} from 'redux/modules/account';
import {useDispatcher} from 'utils/hooks/useRedux';
import css from 'style/pages/Login.module.scss'
import logo from 'images/logo.svg';

const Login = () => {
  const handleLogin = useDispatcher(login);

  return (
    <section className={css.login}>
      <div className={css.login__wrap}>
        <div className={css.login__main}>
          <img className={css.login__logo} src={logo} alt="logo" />
          <h1 className={css.login__title}>My Salary Expectation</h1>
          <p className={css.login__subtitle}>Your full LinkedIn profile will be shared. My Salary Expectation uses this information for calculate your salary.</p>
        </div>
        <Button className={css.login__button} variant="contained" color="primary" size="large" onClick={handleLogin}>
          Apply with LinkedIn
        </Button>
      </div>
    </section>
  );
};

export default Login;
