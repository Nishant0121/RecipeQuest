"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [querry, setQuerry] = useState("hello");

  return (
    <AppContext.Provider value={{ querry, setQuerry }}>
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
