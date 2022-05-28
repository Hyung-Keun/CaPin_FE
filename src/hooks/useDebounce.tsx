import { useEffect, useMemo, useRef } from "react";

import { debounce } from "lodash";
import { UnionOrIntersectionTypeNode } from "typescript";

/**
 *
 * @param cb the callback. you can use this callback anywhere, like update state..
 * @param delay The delay of debounce
 * @returns
 */

function useDebounce<T, C extends (...args: Array<T>) => unknown>(
  cb: C,
  delay = 400,
) {
  const callbackRef = useRef<C>(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });

  return useMemo(
    () =>
      debounce((...args: Parameters<C>) => callbackRef.current(...args), delay),
    [delay],
  );
}

export default useDebounce;
