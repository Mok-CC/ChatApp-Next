'use client';

import { Action, initState, reducer } from '@/reducers/AppReducer';
import {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type State = {
  displayNavigation: boolean;
  themeMode: 'dark' | 'light';
};
type AppContextProps = {
  state: State;
  dispatch: Dispatch<Action>;
};

const AppContext = createContext<AppContextProps>(null!);

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
