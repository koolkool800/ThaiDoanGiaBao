import { IsEnum, IsOptional, IsString } from 'class-validator';
import { BasePaginationDto } from '../../../common/dtos/base-pagination.dto';
import { RECORD_ORDER } from '../../../common/interfaces/sort';

export class GetBookDto extends BasePaginationDto {
    @IsOptional()
    @IsString()
    q?: string;

    @IsOptional()
    @IsString()
    sort?: string;

    @IsOptional()
    @IsEnum(RECORD_ORDER)
    order?: RECORD_ORDER;
}
