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

interface PricesProviderProps {
  children: React.ReactNode;
}

const initialState: PricesProps = initState;

const StateContext = createContext<PricesProps | null>(null);
const UpdaterContext = createContext<[string, PricesProps] | null>(null);

const PricesProvider: React.FC<PricesProviderProps> = ({ children }) => {
  const [store, setStore] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={store}>
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
  const updater = useCallback(setStore, [setStore]);
  return updater;
}

export { PricesProvider, usePricesState, usePricesUpdater };
