import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BasePaginationDto } from '../../../common/dtos/base-pagination.dto';
import { RECORD_ORDER } from '../../../common/interfaces/sort';
import { BOOK_SORTABLE_FIELDS } from '../book.constant';

export class GetBookDto extends BasePaginationDto {
    @IsOptional()
    @IsString()
    q?: string;

    @IsOptional()
    @IsEnum(BOOK_SORTABLE_FIELDS)
    sort?: BOOK_SORTABLE_FIELDS;

    @IsOptional()
    @IsEnum(RECORD_ORDER)
    order?: RECORD_ORDER;
}
