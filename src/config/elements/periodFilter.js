const periodFilter = [
  {
    name: 'Month',
    id: 'month',
    action: (value) => value / 12,
  },
  {
    name: 'Quartal',
    id: 'quartal',
    action: (value) => value / 3,
  },
  {
    name: 'Half year',
    id: 'half',
    action: (value) => value / 2,
  },
  {
    name: 'Year',
    id: 'year',
    action: (value) => value,
  },
];

export default periodFilter;
