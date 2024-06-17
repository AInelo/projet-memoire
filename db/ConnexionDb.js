import { createPool } from 'mysql2';

class DataBase {
    constructor() {
        this.pool = createPool({
            host: 'localhost',
            user: 'root',
            password: 'lionel',
            database: 'database_name'
        });
    }
    
    async query(sql, params) {
        try {
            const [rows, fields] = await this.pool.promise().query(sql, params);
            return rows;
        } catch (error) {
            console.error('Erreur lors de l\'exécution de la requête', error);
            throw error;
        }
    }
}

export default new DataBase();
