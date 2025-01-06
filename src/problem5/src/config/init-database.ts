import mysql from 'mysql2/promise';

const initDatabase = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'user',
            password: 'password',
        });

        // Create database if it doesn't exist
        await connection.query('CREATE DATABASE IF NOT EXISTS express_db');

        await connection.end();
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
};

export default initDatabase;
