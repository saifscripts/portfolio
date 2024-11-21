'use client';

import { useHash } from '@/contexts/hash.context';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useHashSync = (hash: string, threshold: number = 0.5) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold });
  const { setHash } = useHash();
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isInView) {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      setHash(hash);
      timeoutId.current = setTimeout(() => {
        window.location.hash = hash.replace('#', '');
      }, 300);
    } else {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    }

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [isInView, hash, setHash]);

  return ref;
};
