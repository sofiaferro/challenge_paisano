import { AunctionsProps } from '.';

type StringKeyValuePair = [string, AunctionsProps];

const aunctionsReducer = (aunctions: object, action: StringKeyValuePair) => {
  const [name, payload] = action;
  switch (name) {
    case 'UPDATE_AUNCTIONS':
      return { ...aunctions, ...payload };
    default:
      return aunctions;
  }
};

export default aunctionsReducer;
