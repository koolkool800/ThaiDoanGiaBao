import express, { Application } from 'express';
import { AppModule } from './app/app.module';
import dotenv from 'dotenv';
import { loggerMiddleware } from './common/middlewares/logger.middleware';
import { DatabaseService } from './config/database.service';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { swaggerOptions } from './config/swagger.config';
import { errorHandlerMiddleware } from './common/middlewares/error-handler.middleware';
dotenv.config();

const bootstrap = async () => {
    const app = express();

    // Initialize TypeORM
    await DatabaseService.initialize();

    // Middleware setup
    app.use(express.json());
    app.use(loggerMiddleware);

    // Setup Swagger
    const specs = swaggerJsdoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    app.use(errorHandlerMiddleware);

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
