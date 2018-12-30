import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';

import css from 'style/components/Chips.module.scss';

const Chips = ({label, data}) => (
  <div className={css.chips}>
    <span className={css.chips__label}><b>{label}:</b></span>
    {data.map((item) => <Chip className={css.chips__item} key={item} label={item} />)}
  </div>
);

Chips.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
};

export default Chips;
