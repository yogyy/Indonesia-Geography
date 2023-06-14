'use client';

import * as React from 'react';

interface IMenuContext {
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = React.createContext<IMenuContext>({
  data: 'apaan coek',
  setData: () => {},
});

export const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = React.useState('');
  return <MyContext.Provider value={{ data, setData }}>{children}</MyContext.Provider>;
};

export const useThemeContext = () => React.useContext(MyContext);
