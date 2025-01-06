import { Application } from 'express';
import { BookModule } from '../modules/books/book.module';

export class AppModule {
    constructor(private app: Application) {}

    init() {
        // Load modules
        new BookModule(this.app).init();
    }
}
