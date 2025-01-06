import { Request, Response } from 'express';
import { BookService } from '../services/book.service';
import { GetBookDto } from '../dtos/get-books.dto';
import { PaginatedResponse, SuccessResponse } from '../../../config/response';
import { CreateBookDto } from '../dtos/create-book.dto';
import { UpdateBookDto } from '../dtos/update-book.dto';

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book management APIs
 */
export class BookController {
    private bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    /**
     * @swagger
     * /api/books:
     *   get:
     *     summary: Get paginated list of books
     *     description: Retrieve books with pagination, sorting, and filtering options
     *     tags: [Books]
     *     parameters:
     *       - in: query
     *         name: pageIndex
     *         schema:
     *           $ref: '#/components/schemas/PaginationParams/properties/pageIndex'
     *       - in: query
     *         name: pageSize
     *         schema:
     *           $ref: '#/components/schemas/PaginationParams/properties/pageSize'
     *       - in: query
     *         name: q
     *         schema:
     *           type: string
     *           description: Search query for title or author
     *           example: "gatsby"
     *       - in: query
     *         name: sort
     *         schema:
     *           $ref: '#/components/schemas/BOOK_SORTABLE_FIELDS'
     *       - in: query
     *         name: order
     *         schema:
     *           $ref: '#/components/schemas/RECORD_ORDER'
     *     responses:
     *       200:
     *         description: Successfully retrieved books
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/PaginatedResponse'
     *       400:
     *         description: Invalid parameters
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     */
    async getBooks(req: Request, res: Response) {
        const query: GetBookDto = req.query as any;
        const books = await this.bookService.getList(query);

        return res.json(
            new PaginatedResponse({
                items: books.books,
                totalItems: books.total,
                pageIndex: query.pageIndex || 0,
                pageSize: query.pageSize || 10,
            }),
        );
    }

    /**
     * @swagger
     * /api/books/{id}:
     *   get:
     *     summary: Get a book by ID
     *     tags: [Books]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Book ID
     *     responses:
     *       200:
     *         description: Book found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Book'
     *       404:
     *         description: Book not found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     */
    async getBook(req: Request, res: Response) {
        const id = req.params.id;
        const book = await this.bookService.findOne(Number(id));
        return res.json(SuccessResponse.call(book));
    }

    /**
     * @swagger
     * /api/books:
     *   post:
     *     summary: Create a new book
     *     tags: [Books]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateBookDto'
     *     responses:
     *       200:
     *         description: The created book
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Book'
     */
    async createBook(req: Request, res: Response) {
        const createBookDto: CreateBookDto = req.body;
        const book = await this.bookService.create(createBookDto);

        return res.json(SuccessResponse.call(book));
    }

    /**
     * @swagger
     * /api/books/{id}:
     *   put:
     *     summary: Update a book
     *     description: Update an existing book by ID
     *     tags: [Books]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Book ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/UpdateBookDto'
     *     responses:
     *       200:
     *         description: Book updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Book'
     *       400:
     *         description: Invalid input
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     *       404:
     *         description: Book not found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     */
    async updateBook(req: Request, res: Response) {
        const updateBookDto: UpdateBookDto = req.body;
        const id = req.params.id;
        const book = await this.bookService.update(Number(id), updateBookDto);

        return res.json(SuccessResponse.call(book));
    }

    /**
     * @swagger
     * /api/books/{id}:
     *   delete:
     *     summary: Delete a book
     *     description: Delete a book by ID
     *     tags: [Books]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Book ID
     *     responses:
     *       200:
     *         description: Book deleted successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 result:
     *                   type: boolean
     *                   example: true
     *                 message:
     *                   type: string
     *                   example: Successfully
     *       404:
     *         description: Book not found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/ErrorResponse'
     */
    async deleteBook(req: Request, res: Response) {
        const id = req.params.id;
        await this.bookService.delete(Number(id));

        return res.json(SuccessResponse.call());
    }
}
