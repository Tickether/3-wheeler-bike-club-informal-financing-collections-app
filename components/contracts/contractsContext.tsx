"use client";

import { createContext, useContext, ReactNode } from "react";

type ContractsContextValue = {
  getBackContracts: () => Promise<void>;
} | null;

const ContractsContext = createContext<ContractsContextValue>(null);

export function ContractsProvider({
  getBackContracts,
  children,
}: {
  getBackContracts: () => Promise<void>;
  children: ReactNode;
}) {
  return (
    <ContractsContext.Provider value={{ getBackContracts }}>
      {children}
    </ContractsContext.Provider>
  );
}

export function useContractsContext() {
  return useContext(ContractsContext);
}
