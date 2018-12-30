import React from 'react';
import PropTypes from 'prop-types';
import getValue from 'lodash/get';

import css from 'style/components/Profile.module.scss';
import logo from 'images/logo.svg';

const Profile = ({info}) => (
  <div className={css.profile}>
    <div className={css.profile__card}>
      <img className={css.profile__image} src={info.pictureUrl || logo} alt="profile"/>
      <header className={css.profile__headers}>
        <h4>{getValue(info, 'firstName', '')} {getValue(info, 'lastName', '')}</h4>
        <h5>{getValue(info, 'headline', '')}</h5>
      </header>
    </div>
    <ul className={css.profile__list}>
      <li className={css.profile__item}>
        <b>Location</b> <span>{getValue(info, 'location.name', 'unknown country')}</span>
      </li>
      <li className={css.profile__item}>
        <b>Company</b> <span>
          {getValue(info, 'positions.values[0].company.name', 'unknown company')} ({getValue(info, 'positions.values[0].company.size', '')})
        </span>
      </li>
      <li className={css.profile__item}>
        <b>Role</b> <span>{getValue(info, 'positions.values[0].title', '')}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  info: PropTypes.object,
};

export default Profile;
