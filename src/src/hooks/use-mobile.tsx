'use client';

import * as React from 'react';

const MOBILE_BREAKPOINT = 768;

/**
 * Returns true once we know the viewport is narrower than MOBILE_BREAKPOINT.
 * Returns false on the server and on first client render to avoid hydration
 * mismatches, then updates after mount.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    onChange();
    mql.addEventListener('change', onChange);

    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}
