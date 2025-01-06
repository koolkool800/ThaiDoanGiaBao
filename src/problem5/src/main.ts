import express, { Application } from 'express';
import { AppModule } from './app/app.module';
import dotenv from 'dotenv';
import { loggerMiddleware } from './common/middlewares/logger.middleware';
import { AppDataSource } from './config/typeorm.config';
dotenv.config();

const bootstrap = async () => {
    const app = express();

    // Initialize TypeORM
    try {
        await AppDataSource.initialize();
        console.log('Database connection established');
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1);
    }

    // Middleware setup
    app.use(express.json());
    app.use(loggerMiddleware);

    // Load modules
    const appModule = new AppModule(app);
    appModule.init();

    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
};

bootstrap();
