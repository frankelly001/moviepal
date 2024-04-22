import {useEffect, useState} from 'react';

/** Delay is set at 1000ms by default */
function useDebounce(
  val: string,
  delay: number | undefined = 1000,
): [string, React.Dispatch<React.SetStateAction<string>>, string] {
  const [value, setValue] = useState(val);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [value, setValue, debouncedValue];
}

export default useDebounce;
