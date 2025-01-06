import { join } from 'path';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: 'password',
    database: 'express_db',
    synchronize: false,
    logging: true,
    entities: [join(__dirname, '../modules/**/entities/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '../migrations/*{.ts,.js}')],
    subscribers: [],
});
