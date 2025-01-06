import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class BasePaginationDto {
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    pageIndex?: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    pageSize?: number;

    constructor() {
        this.pageIndex = this.pageIndex ?? 1;
        this.pageSize = this.pageSize ?? 10;
    }

    public getOffset(): number {
        if (!this.pageIndex) this.pageIndex = 1;
        if (!this.pageSize) this.pageSize = 10;
        return (this.pageIndex - 1) * this.pageSize;
    }
}
