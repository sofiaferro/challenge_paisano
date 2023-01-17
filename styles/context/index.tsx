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
const StateContext = createContext<LayoutProps | null>(null);
const UpdaterContext = createContext<[string, LayoutProps] | null>(null);

const StylesProvider: React.FC<StylesProviderProps> = ({ children }) => {
  const [store, setStore] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={store}>
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
  if (typeof setStore !== 'function') return;
  const updater = useCallback(setStore, [setStore]);
  return updater;
}

export { StylesProvider, useStyleState, useStyleUpdater };
