import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';

export class CommitResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  author: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  sha: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  avatar_url: string;
}

export class PaginationDto {
  @ApiProperty({
    description: 'Current Page.',
    example: 1,
  })
  currentPage: number;

  @ApiProperty({
    description: 'Total pages.',
    example: 2,
  })
  totalPages: number;

  @ApiProperty({
    description: 'Total elements list.',
    example: 16,
  })
  totalItems: number;
}

export class ListCommitResponse {
  @ApiProperty({
    example: true,
  })
  public success: boolean;

  @ApiProperty({
    type: [CommitResponseDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CommitResponseDto)
  public data: CommitResponseDto[];

  @ApiProperty()
  public pagination: PaginationDto;
}
