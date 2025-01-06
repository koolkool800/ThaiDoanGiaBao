import { Options } from 'swagger-jsdoc';

export const swaggerOptions: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Book API Documentation',
            version: '1.0.0',
            description: 'API documentation for Book Service',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./src/modules/**/*.ts'], // Path to the API docs
};
