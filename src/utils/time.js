import moment from 'moment';

export default function diffMonth(end) {
  const a = moment();
  const b = moment(end);

  return a.diff(b, 'months');
}
