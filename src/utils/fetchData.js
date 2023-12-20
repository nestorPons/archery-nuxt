export const fetchCSVData = async function(strPath, header = true) {
    try {
        const { readFile } = require('fs/promises');
        const path = require('path');
        const filePath = path.resolve(__dirname, strPath);
        const raw = await readFile(filePath, 'utf8');
        const rows = raw.split('\n');
        const data = rows.map(row => row.split(';'));
        !header && data.shift()
        return data

    } catch (error) {
        console.error('Error load file CSV:', error);
    }
}