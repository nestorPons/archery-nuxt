import {readFile} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineEventHandler(async (event) => {

    try {
        const filePath = path.resolve('src/storage/carbonRecurveSpine.csv');
        const raw = await readFile(filePath, 'utf8');
        // Procesar los datos CSV
        const rows = raw.split('\n').map(row => row.split(';'));

        // Suponiendo que quieras devolver los datos como un array de objetos
        const headers = rows[0];
        const data = rows.slice(1).map(row => {
            const obj: Record<string, string> = {};
            row.forEach((cell, index) => {
                obj[headers[index]] = cell;
            });
            return obj;
        });

        return data;
    } catch (error) {
        console.error('Error loading file CSV:', error);
        return {error: error};
    }
})
