'use client';

import { createContext, use, useEffect, useState } from 'react';

const HashContext = createContext<
  | undefined
  | { hash: string; setHash: React.Dispatch<React.SetStateAction<string>> }
>(undefined);

export const HashProvider = ({ children }: { children: React.ReactNode }) => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <HashContext.Provider value={{ hash, setHash }}>
      {children}
    </HashContext.Provider>
  );
};

export const useHash = () => {
  const context = use(HashContext);

  if (!context) {
    throw new Error('useHash must be used within a HashProvider');
  }

  return context;
};
