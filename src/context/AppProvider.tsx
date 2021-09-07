import React, { createContext, Dispatch, SetStateAction, VFC, useState, useContext } from 'react';

export type AppContextProps = {
  user: string | null;
  setUser: SetStateAction<Dispatch<string | null>>;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

type Props = {
  children: React.ReactNode;
};

export const AppProvider: VFC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<string | null>('0002');
  return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
};

export const useLogin = () => useContext(AppContext).user !== null;
