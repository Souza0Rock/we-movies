"use client";

import React, { createContext, useContext, useState } from "react";

export type TGlobalDataValue = {
  itemsInCart: number;
  setItemsInCart: (e: number) => void;
};

export const GlobalDataContext = createContext<TGlobalDataValue | null>(null);

export function GlobalDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [itemsInCart, setItemsInCart] = useState<number>(0);

  return (
    <GlobalDataContext.Provider
      value={{
        itemsInCart,
        setItemsInCart,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
}

export function useGlobalData() {
  const context = useContext(GlobalDataContext);

  if (!context) {
    throw new Error("useGlobalData must be used within an GlobalDataProvider");
  }
  return context;
}
