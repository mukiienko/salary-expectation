import React from 'react';
import PropTypes from 'prop-types';
import {HorizontalBar, defaults} from 'react-chartjs-2';
import merge from 'lodash/merge';

import {buildData, splitData} from 'utils/chartjs';

merge(defaults, {
    global: {
        line: {
            borderColor: '#fff',
        },
    },
    scale: {
      ticks: {
        beginAtZero: true,
      }
    },
});

const Chartjs = ({data = []}) => {
  const {labels, resultArr, resultArrAfterTaxes} = splitData(data);
  const chartData= buildData(labels, resultArr, resultArrAfterTaxes);

  return <HorizontalBar data={chartData} />
};

Chartjs.propTypes = {
  data: PropTypes.array,
};

export default React.memo(Chartjs);
