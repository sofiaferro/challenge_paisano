import moment from 'moment';

export const formatEndDate = (endDate: string) => {
  const endsAt = moment(endDate, 'YYYY/MM/DD');
  const month = endsAt.format('M');
  const day = endsAt.format('D');
  const year = endsAt.format('YY');

  return { month, day, year };
};

export const formatETHString = (string: string) => {
  return string
    .replace('.', ',')
    .substring(0, string.length - 4)
    .replace(',', '.');
};

export const formatRawUsd = (rawUsd: number) => {
  return parseFloat(rawUsd.toString().replace(/,/g, ''));
};

export const formattedConversion = (conv: number) => {
  return parseFloat(conv.toString()).toFixed(2);
};

export const sortById = (list: object[]) => {
  return list.sort((a, b) => a.id - b.id);
};

export const sortNewestFirst = (list: object[]) => {
  return list.sort((a, b) => {
    return moment(a.createdAt).isSameOrAfter(b.createdAt) ? 1 : -1;
  });
};

export const sortOldestFirst = (list: object[]) => {
  return list.sort((a, b) =>
    moment(a.createdAt).isSameOrBefore(b.createdAt) ? 1 : -1
  );
};

export const filterByPrice = (list: object[], value: string) => {
  const cheaperThan = (item: object) => {
    const formattedPrice = formatETHString(item.instantPrice);
    return parseFloat(formattedPrice) <= parseFloat(value);
  };
  const filteredList = list.filter(cheaperThan);
  return filteredList;
};
