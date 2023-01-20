import { LayoutProps } from '@/hooks/useDeviceSize';

type StringKeyValuePair = [string, LayoutProps];

const styleReducer = (styles: object, action: StringKeyValuePair) => {
  const [name, payload] = action;
  switch (name) {
    case 'UPDATE_SIZE':
      return { ...styles, ...payload };
    default:
      return styles;
  }
};

export default styleReducer;
