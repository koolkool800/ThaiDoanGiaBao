/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The book ID
 *           example: 1
 *         title:
 *           type: string
 *           description: The book title
 *           example: "The Great Gatsby"
 *         author:
 *           type: string
 *           description: The book author
 *           example: "F. Scott Fitzgerald"
 *         description:
 *           type: string
 *           description: The book description
 *           example: "A story about the American dream"
 *         price:
 *           type: number
 *           description: The book price
 *           example: 29.99
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     CreateBookDto:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - price
 *       properties:
 *         title:
 *           type: string
 *           minLength: 2
 *           description: The book's title
 *           example: "The Great Gatsby"
 *         author:
 *           type: string
 *           description: The book's author
 *           example: "F. Scott Fitzgerald"
 *         description:
 *           type: string
 *           description: The book's description
 *           example: "A story about the American dream"
 *         price:
 *           type: number
 *           description: The book's price
 *           example: 29.99
 *
 *     UpdateBookDto:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The book's title
 *           example: "Updated Title"
 *         author:
 *           type: string
 *           description: The book's author
 *         description:
 *           type: string
 *           description: The book's description
 *         price:
 *           type: number
 *           description: The book's price
 *
 *     BOOK_SORTABLE_FIELDS:
 *       type: string
 *       enum:
 *         - price
 *         - createdAt
 *         - updatedAt
 *         - id
 *         - title
 *         - author
 *       example: "createdAt"
 *
 *     RECORD_ORDER:
 *       type: string
 *       enum:
 *         - ASC
 *         - DESC
 *       default: DESC
 *       example: "DESC"
 *
 *     GetBookDto:
 *       allOf:
 *         - $ref: '#/components/schemas/PaginationParams'
 *         - type: object
 *           properties:
 *             q:
 *               type: string
 *               description: Search query for title or author
 *               example: "gatsby"
 *             sort:
 *               $ref: '#/components/schemas/BOOK_SORTABLE_FIELDS'
 *             order:
 *               $ref: '#/components/schemas/RECORD_ORDER'
 *
 *     PaginationParams:
 *       type: object
 *       properties:
 *         pageIndex:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *           description: Page number
 *           example: 1
 *         pageSize:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *           description: Items per page
 *           example: 10
 *
 *     PaginatedResponse:
 *       type: object
 *       properties:
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Book'
 *         pageIndex:
 *           type: integer
 *         pageSize:
 *           type: integer
 *         totalItems:
 *           type: integer
 *         totalPages:
 *           type: integer
 *         hasNextPage:
 *           type: boolean
 *         hasPrevPage:
 *           type: boolean
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         result:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: "Error message"
 *         errorCode:
 *           type: string
 *           example: "BOOK_NOT_FOUND"
 */
