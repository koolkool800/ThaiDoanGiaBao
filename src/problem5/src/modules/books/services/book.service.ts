import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { AppDataSource } from '../../../config/typeorm.config';
import { CreateBookDto } from '../dtos/create-book.dto';
import { GetBookDto } from '../dtos/get-books.dto';
import { ErrorException } from '../../../config/error-exception';
import { BOOK_ERROR_CODE } from '../book.constant';
import { UpdateBookDto } from '../dtos/update-book.dto';
import { RECORD_ORDER } from '../../../common/interfaces/sort';
import { ObjectUtil } from '../../../utils/object.util';

export class BookService {
    private bookRepository: Repository<Book>;

    constructor() {
        this.bookRepository = AppDataSource.getRepository(Book);
    }

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const book = this.bookRepository.create(createBookDto);
        return await this.bookRepository.save(book);
    }

    async getList(filters: GetBookDto) {
        const qb = this.bookRepository
            .createQueryBuilder('book')
            .select(['book.id', 'book.title', 'book.author', 'book.description', 'book.price']);

        if (filters.q) {
            qb.andWhere('(book.title ILIKE :q OR book.author ILIKE :q)', { q: `%${filters.q}%` });
        }

        if (filters.sort) {
            qb.orderBy(`book.${filters.sort}`, filters.order || RECORD_ORDER.DESC);
        }

        qb.offset(filters.getOffset()).limit(filters.pageSize);

        const [books, total] = await qb.getManyAndCount();

        return { books, total };
    }

    async findOne(id: number): Promise<Book> {
        const book = await this.bookRepository
            .createQueryBuilder('book')
            .where('book.id = :id', { id })
            .select([
                'book.id',
                'book.title',
                'book.author',
                'book.description',
                'book.price',
                'book.createdAt',
                'book.updatedAt',
            ])
            .getOne();

        if (!book) {
            throw new ErrorException(BOOK_ERROR_CODE.NOT_FOUND, 'Book not found');
        }

        return book;
    }

    async update(id: number, updateBookDto: UpdateBookDto) {
        const book = await this.findOne(id);
        const cleanUpdateBookDto = ObjectUtil.removeUndefinedFields(updateBookDto);
        await this.bookRepository.update(book.id, cleanUpdateBookDto);
    }

    async delete(id: number): Promise<void> {
        const book = await this.findOne(id);
        await this.bookRepository.softDelete(book);
    }
}
