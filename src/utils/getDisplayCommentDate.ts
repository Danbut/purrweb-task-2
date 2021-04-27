import moment from 'moment';

export const getDisplayCommentDate = (date: string) => {
  const current = moment(moment.now());
  const from = moment(date);

  const result = current.diff(from, 'days');

  if (result === 0) {
    return 'Today';
  } else {
    return `${result} days ago`;
  }
};
