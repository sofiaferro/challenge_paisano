import moment from 'moment';

export const formatEndDate = (endDate: string) => {
  const endsAt = moment(endDate, 'YYYY/MM/DD');
  const month = endsAt.format('M');
  const day = endsAt.format('D');
  const year = endsAt.format('YY');

  return { month, day, year };
};

export const formatHighestBid = (highestBid: string) => {
  return highestBid
    .replace('.', ',')
    .substring(0, highestBid.length - 4)
    .replace(',', '.');
};

export const formatRawUsd = (rawUsd: number) => {
  return parseFloat(rawUsd.toString().replace(/,/g, ''));
};

export const formattedConversion = (conv: number) => {
  return parseFloat(conv.toString()).toFixed(2);
};

export const sortById = (list) => {
  return list.sort((a, b) => (moment(a.id).isSameOrAfter(b.id) ? 1 : -1));
};

export const sortNewestFirst = (list) => {
  return list.sort((a, b) =>
    moment(a.createdAt).isSameOrAfter(b.createdAt) ? 1 : -1
  );
};

export const sortOldestFirst = (list) => {
  return list.sort((a, b) =>
    moment(a.createdAt).isSameOrBefore(b.createdAt) ? 1 : -1
  );
};
