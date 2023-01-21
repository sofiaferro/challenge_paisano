import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
} from 'react';
import initState from './initState';
import reducer from './reducer';

export interface AunctionsProps {
  id: number;
  instantPrice: string;
  highestBid: string;
  author: string;
  authorAvatar: string;
  type: string;
  stock: number;
  likes: number;
  createdAt: string;
  endsAt: string;
  media: {
    id: number;
    image: string;
    image2x: string;
  };
  attributes: object;
  bidUsers: never[];
}

interface AunctionsProviderProps {
  children: React.ReactNode;
}

type StringKeyValuePair = [string, AunctionsProps];

const initialState = initState;

const StateContext = createContext<[string, AunctionsProps] | null>(null);
const UpdaterContext = createContext<React.Dispatch<StringKeyValuePair> | null>(
  null
);

const AunctionsProvider: React.FC<AunctionsProviderProps> = ({ children }) => {
  const [store, setStore] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={store as [string, AunctionsProps]}>
      <UpdaterContext.Provider value={setStore}>
        {children}
      </UpdaterContext.Provider>
    </StateContext.Provider>
  );
};

function useAunctionsState() {
  const storeState = useContext(StateContext);
  if (typeof StateContext === 'undefined') {
    throw new Error(
      'useAunctionsState must be used within a AunctionsProvider'
    );
  }
  return storeState;
}

function useAunctionsUpdater() {
  const setStore = useContext(UpdaterContext);
  if (typeof setStore === 'undefined') {
    throw new Error(
      'useAunctionsUpdater must be used within a AunctionsProvider'
    );
  }
  const updater = useCallback(setStore as React.Dispatch<StringKeyValuePair>, [
    setStore,
  ]);
  return updater;
}

export { AunctionsProvider, useAunctionsState, useAunctionsUpdater };
