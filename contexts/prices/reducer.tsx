import { pricesProps } from '.';

type StringKeyValuePair = [string, pricesProps];

const pricesReducer = (prices: object, action: StringKeyValuePair) => {
  const [name, payload] = action;
  switch (name) {
    case 'UPDATE_PRICES':
      return { ...prices, ...payload };
    default:
      return prices;
  }
};

export default pricesReducer;
