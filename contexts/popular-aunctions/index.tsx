import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from 'react';
import initState from './initState';
import reducer from './reducer';

import { AunctionsProps } from '../all-aunctions';

interface PopularAunctionsProviderProps {
  children: React.ReactNode;
}

const initialState = initState;

const StateContext = createContext<AunctionsProps | null>(null);
const UpdaterContext = createContext<[string, AunctionsProps] | null>(null);

const PopularAunctionsProvider: React.FC<PopularAunctionsProviderProps> = ({
  children,
}) => {
  const [store, setStore] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={store}>
      <UpdaterContext.Provider value={setStore}>
        {children}
      </UpdaterContext.Provider>
    </StateContext.Provider>
  );
};

function usePopularAunctionsState() {
  const storeState = useContext(StateContext);
  if (typeof StateContext === 'undefined') {
    throw new Error(
      'usePopularAunctionsState must be used within a PopularAunctionsProvider'
    );
  }
  return storeState;
}

function usePopularAunctionsUpdater() {
  const setStore = useContext(UpdaterContext);
  if (typeof setStore === 'undefined') {
    throw new Error(
      'usePopularAunctionsUpdater must be used within a PopularAunctionsProvider'
    );
  }
  const updater = useCallback(setStore, [setStore]);
  return updater;
}

export {
  PopularAunctionsProvider,
  usePopularAunctionsState,
  usePopularAunctionsUpdater,
};
