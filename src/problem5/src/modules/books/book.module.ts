import { Application, NextFunction, Request, Response, Router } from 'express';
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
        this.router.get(
            '/',
            validationMiddleware(GetBookDto),
            this.asyncHandler(this.bookController.getBooks.bind(this.bookController)),
        );
        this.router.post(
            '/',
            validationMiddleware(CreateBookDto),
            this.asyncHandler(this.bookController.createBook.bind(this.bookController)),
        );
        this.router.put(
            '/:id',
            validationMiddleware(UpdateBookDto),
            this.asyncHandler(this.bookController.updateBook.bind(this.bookController)),
        );
        this.router.delete('/:id', this.asyncHandler(this.bookController.deleteBook.bind(this.bookController)));
        this.router.get('/:id', this.asyncHandler(this.bookController.getBook.bind(this.bookController)));
    }

    init() {
        this.app.use('/api/books', this.router);
    }

    private asyncHandler(fn: Function) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                await fn(req, res);
            } catch (error) {
                next(error);
            }
        };
    }
}
