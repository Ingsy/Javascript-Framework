export function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to local storage:', error);
    }
}


export function loadFromLocalStorage(key, defaultValue = null) {
    try {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : defaultValue;
    } catch (error) {
        console.error('Error loading from local storage:', error);
        return defaultValue;
    }
}