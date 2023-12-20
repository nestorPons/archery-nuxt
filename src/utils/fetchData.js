export const fetchData = async function(strPath) {
    try {
        const path = require(strPath);
        const response = await fetch(path);
        const data = await response.text();
        // Procesar los datos CSV aquí
        return data
    } catch (error) {
        console.error('Error load file CSV:', error);
    }
}