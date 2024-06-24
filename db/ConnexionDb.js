import { createPool } from 'mysql2';

class DataBase {
    constructor() {
        this.pool = createPool({
            host: 'localhost',
            user: 'root',
            password: 'lionel',
            database: 'business'
        });
    
    
    // async execute(sql, params) {
    //     try {
    //         const [rows, fields] = await this.pool.promise().query(sql, params);
    //         return rows;
    //     } catch (error) {
    //         console.error('Erreur lors de l\'exécution de la requête', error);
    //         throw error;
    //     }
    // }


     // Test de la connexion à la base de données
     this.pool.getConnection((err, connection) => {
        if (err) {
            console.error('Erreur lors de la connexion à la base de données:', err);
        } else {
            console.log('Connexion à la base de données établie.');
            connection.release();
        }
    });
}

async execute(sql, params) {
    return new Promise((resolve, reject) => {
        this.pool.query(sql, params, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve([rows]);
            }
        });
    });
}
}

export default DataBase;
