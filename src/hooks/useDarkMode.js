import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage(initialValue);
    useEffect(() => {
        if (value) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [value])

    return [value, setValue];
}