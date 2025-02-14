import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    author: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsNumber()
    @IsOptional()
    price: number;
}
