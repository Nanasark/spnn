// contexts/CollectionContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type CollectionContextType = {
  collectionAddress: string;
  setCollectionAddress: (address: string) => void;
};

const CollectionContext = createContext<CollectionContextType | undefined>(undefined);

export const CollectionProvider = ({ children }: { children: ReactNode }) => {
  const [collectionAddress, setCollectionAddress] = useState<string>("");

  return (
    <CollectionContext.Provider value={{ collectionAddress, setCollectionAddress }}>
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollection = () => {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error("useCollection must be used within a CollectionProvider");
  }
  return context;
};
