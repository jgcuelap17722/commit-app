import { ApiProperty } from '@nestjs/swagger';
import { Type, Transform } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsPositive } from 'class-validator';

export class QueriesListCommitDto {
  @ApiProperty({
    default: 1,
    description: 'The page number to retrieve.',
  })
  @Type(() => Number)
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsPositive()
  page: number;

  @ApiProperty({
    default: 10,
    description: 'The maximum number of items to return per page.',
  })
  @Type(() => Number)
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsPositive()
  limit: number;
}
