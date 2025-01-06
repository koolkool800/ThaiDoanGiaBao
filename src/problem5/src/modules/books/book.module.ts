import { Application, Request, Response, Router } from 'express';
import { BookController } from './controllers/book.controller';
import { validationMiddleware } from '../../common/middlewares/validation.middleware';
import { GetBookDto } from './dtos/get-books.dto';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

export class BookModule {
    private router: Router;
    private bookController: BookController;

    constructor(private app: Application) {
        this.router = Router();
        this.bookController = new BookController();
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get('/', validationMiddleware(GetBookDto), (req: Request, res: Response) => {
            this.bookController.getBooks(req, res);
        });
        this.router.post('/', validationMiddleware(CreateBookDto), (req: Request, res: Response) => {
            this.bookController.createBook(req, res);
        });
        this.router.put('/:id', validationMiddleware(UpdateBookDto), (req: Request, res: Response) => {
            this.bookController.updateBook(req, res);
        });
        this.router.delete('/:id', (req: Request, res: Response) => {
            this.bookController.deleteBook(req, res);
        });
        this.router.get('/:id', (req: Request, res: Response) => {
            this.bookController.getBook(req, res);
        });
    }

    init() {
        this.app.use('/api/books', this.router);
    }
}
