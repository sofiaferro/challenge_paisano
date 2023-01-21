// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from 'react';

import initState from './initState';
import reducer from './reducer';

import { LayoutProps } from '@/hooks/useDeviceSize';

const initialState: LayoutProps = initState;

interface StylesProviderProps {
  children: React.ReactNode;
}

type StringKeyValuePair = [string, StylesProviderProps];

const StateContext = createContext<[string, StringKeyValuePair] | null>(null);
const UpdaterContext = createContext<React.Dispatch<StringKeyValuePair> | null>(
  null
);
const StylesProvider: React.FC<StylesProviderProps> = ({ children }) => {
  const [store, setStore] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={store as [string, StringKeyValuePair]}>
      <UpdaterContext.Provider value={setStore}>
        {children}
      </UpdaterContext.Provider>
    </StateContext.Provider>
  );
};

function useStyleState() {
  const storeState = useContext(StateContext);
  if (typeof StateContext === 'undefined') {
    throw new Error('useStyleState must be used within a StylesProvider');
  }
  return storeState;
}

function useStyleUpdater() {
  const setStore = useContext(UpdaterContext);
  if (typeof setStore === 'undefined') {
    throw new Error('useStyleUpdater must be used within a StylesProvider');
  }
  const updater = useCallback(setStore, [setStore]);
  return updater;
}

export { StylesProvider, useStyleState, useStyleUpdater };
