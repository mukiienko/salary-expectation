import React from 'react';
import PropTypes from 'prop-types';

import css from 'style/components/Fetching.module.scss';

const Fetching = ({isFetching = false}) => {
  if (isFetching) {
    return (
      <div className={css.loader}>
        <div className={css.loader__circle} />
      </div>
    )
  }
  return null;
};

Fetching.propTypes = {
  isFetching: PropTypes.bool,
};

export default Fetching;
