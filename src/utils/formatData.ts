import Moment from 'moment';

export function stringTrim(value: any) {
  if (!value) return '';
  if (typeof value === 'string') return value.trim();
  return value;
}

export function toLocalDate(date: string | number | Date) {
  return date ? Moment(date).format('YYYY-MM-DD HH:mm:ss') : '--';
}
