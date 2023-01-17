import { LayoutProps } from '@/hooks/useDeviceSize';

interface ActionProps {
  name: string;
  payload: LayoutProps;
}

const styleReducer = (styles: object, action: ActionProps[]) => {
  const [name, payload] = action;
  switch (name) {
    case 'UPDATE_SIZE':
      return { ...styles, ...payload };
    default:
      return styles;
  }
};

export default styleReducer;
