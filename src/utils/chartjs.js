export function buildData(labels, resultArr, resultArrAfterTaxes) {
  return ({
    labels,
      datasets: [
        {
          label: 'Gross Salary',
          backgroundColor: 'rgba(0,156,188,0.4)',
          borderColor: 'rgba(0,156,188,0.7)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0,156,188,0.8)',
          hoverBorderColor: 'rgba(0,156,188,0.8)',
          data: resultArr,
        },
        {
          label: 'Net Salary',
          backgroundColor: 'rgba(101,172,142,.4)',
          borderColor: 'rgba(101,172,142,.7)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(101,172,142,.8)',
          hoverBorderColor: 'rgba(101,172,142,.8)',
          data: resultArrAfterTaxes,
        },
      ]
    });
  };

export function splitData(data) {
    const labels = [];
    const resultArr = [];
    const resultArrAfterTaxes = [];

    data.forEach((item) => {
      labels.push(item.label);
      resultArr.push(item.result);
      resultArrAfterTaxes.push(item.resultAfterTaxes);
    });

    return {labels, resultArr, resultArrAfterTaxes};
  };
