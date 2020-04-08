import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';

export function useDarkMode(className, targetSelector = 'body', defaultDarkMode = false) {
  // hooks
  const [darkMode, setDarkMode] = useLocalStorage('darkModeEnabled', defaultDarkMode);
  
  // useEffect(() => {
    
  // })

  // init Dark Mode
  darkMode ?
   document.querySelector(targetSelector).classList.add(className) : 
   document.querySelector(targetSelector).classList.remove(className);

  // setter
  function toggleDarkMode() {
    document.querySelector(targetSelector).classList.toggle(className);
    setDarkMode(!darkMode)
  }

  return [toggleDarkMode];
}