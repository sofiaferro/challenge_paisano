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

export interface PricesProps {
  usd: number;
  eth: number;
}

export interface PricesProviderProps {
  children: React.ReactNode;
}

type StringKeyValuePair = [string, PricesProps];

const initialState: PricesProps = initState;

const StateContext = createContext<[string, PricesProviderProps] | null>(null);
const UpdaterContext = createContext<React.Dispatch<StringKeyValuePair> | null>(
  null
);
const PricesProvider: React.FC<PricesProviderProps> = ({ children }) => {
  const [store, setStore] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={store as [string, PricesProviderProps]}>
      <UpdaterContext.Provider value={setStore}>
        {children}
      </UpdaterContext.Provider>
    </StateContext.Provider>
  );
};

function usePricesState() {
  const storeState = useContext(StateContext);
  if (typeof StateContext === 'undefined') {
    throw new Error('usePricesState must be used within a StylesProvider');
  }
  return storeState;
}

function usePricesUpdater() {
  const setStore = useContext(UpdaterContext);
  if (typeof setStore === 'undefined') {
    throw new Error('usePricesUpdater must be used within a StylesProvider');
  }
  const updater = useCallback(setStore as React.Dispatch<StringKeyValuePair>, [
    setStore,
  ]);
  return updater;
}

export { PricesProvider, usePricesState, usePricesUpdater };
