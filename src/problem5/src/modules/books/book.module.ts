import { Application, Request, Response, Router } from 'express';
import { BookController } from './controllers/book.controller';

export class BookModule {
    private router: Router;
    private bookController: BookController;

    constructor(private app: Application) {
        this.router = Router();
        this.bookController = new BookController();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get('/', (req: Request, res: Response) => {
            this.bookController.getBooks(req, res);
        });
    }

    init() {
        this.app.use('/books', this.router);
    }
}
