import { Request, Response } from 'express';
import { BookService } from '../services/book.service';
import { GetBookDto } from '../dtos/get.dto';
import { PaginatedResponse, SuccessResponse } from '../../../config/response';

export class BookController {
    private bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    async getBooks(req: Request, res: Response) {
        const query: GetBookDto = req.query as any;
        const books = await this.bookService.getList({
            ...query,
            getOffset: () => (query.pageIndex || 0) * (query.pageSize || 10),
        });

        return res.json(
            new PaginatedResponse({
                items: books.books,
                totalItems: books.total,
                pageIndex: query.pageIndex || 0,
                pageSize: query.pageSize || 10,
            }),
        );
    }
}
