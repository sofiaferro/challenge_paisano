import { useEffect, useState } from 'react';

// interfaces
interface BreakPointsProps {
  [key: string]: number;
  A: number;
  S: number;
  M: number;
  L: number;
  G: number;
}

export interface PointsMapProps {
  [key: string]: boolean;
  A: boolean;
  S: boolean;
  M: boolean;
  L: boolean;
  G: boolean;
}

export interface SizeProps {
  width: number;
  height: number;
}

export interface LayoutProps {
  size: SizeProps;
  device: PointsMapProps;
}

// instances
const breakPoints: BreakPointsProps = {
  A: 360,
  S: 680,
  M: 960,
  L: 1140,
  G: 1440,
};

const pointsMap: PointsMapProps = {
  A: false,
  S: false,
  M: false,
  L: false,
  G: false,
};

// find the device size in the breakpoints range
const findDevice = (breakPoints: BreakPointsProps, value: number) => {
  const keys = Object.keys(breakPoints);
  for (let i = 1; i < keys.length - 1; i++) {
    if (
      value === breakPoints[keys[i]] ||
      (value > breakPoints[keys[i - 1]] && value < breakPoints[keys[i + 1]])
    ) {
      pointsMap[keys[i]] = true;
      return pointsMap;
    }
  }
  return { ...pointsMap, A: true };
};

// hook to find the size of the device
const useDeviceSize = (): LayoutProps | undefined => {
  if (typeof window !== 'undefined') {
    const [size, setSize] = useState<SizeProps>({
      width: window?.innerWidth,
      height: window?.innerHeight,
    });

    useEffect(() => {
      const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const device = findDevice(breakPoints, size.width);
    return { size, device };
  }
};

export default useDeviceSize;
