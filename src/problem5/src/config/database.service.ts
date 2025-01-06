import { AppDataSource } from './typeorm.config';
import initDatabase from './init-database';

export class DatabaseService {
    static async initialize() {
        try {
            // Initialize TypeORM connection
            await AppDataSource.initialize();
            console.log('Database connection established');
        } catch (error) {
            console.error('Error connecting to database:', error);
            process.exit(1);
        }
    }
}
