import { useHash } from '@/contexts/hash.context';
import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useHashSync = (hash: string, threshold: number = 0.5) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold });
  const { setHash } = useHash();
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    if (isInView) {
      if (timeoutId) clearTimeout(timeoutId);
      setHash(hash);
      timeoutId = setTimeout(() => {
        window.location.hash = hash.replace('#', '');
      }, 300);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, hash, setHash]);

  return ref;
};
