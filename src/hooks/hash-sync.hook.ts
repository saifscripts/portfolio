'use client';

import { useHash } from '@/contexts/hash.context';
import { useInView, UseInViewOptions } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useHashSync = (hash: string, options?: UseInViewOptions) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, ...options });
  const { setHash } = useHash();

  useEffect(() => {
    if (isInView) {
      setHash(hash);
    }
  }, [isInView, hash]);

  return ref;
};
