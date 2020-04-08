import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  // hooks
  const [value, setValue] = useState(
    window.localStorage.getItem(key) ?
     JSON.parse(window.localStorage.getItem(key)) :
     initialValue
  );

  // setter
  function setLocalStorage(value) {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  }

  return [value, setLocalStorage]
}