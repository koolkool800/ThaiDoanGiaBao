import { IsOptional, IsString } from 'class-validator';
import { BasePaginationDto } from '../../../common/dtos/base-pagination.dto';

export class GetBookDto extends BasePaginationDto {
    @IsOptional()
    @IsString()
    q?: string;
}
