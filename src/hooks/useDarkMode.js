import { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode-enabled')

    return [darkMode, setDarkMode]
}

export default useDarkMode;