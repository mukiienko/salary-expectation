import { useEffect } from 'react';

export function useMouted(action) {
  useEffect(() => action(), []);
}
