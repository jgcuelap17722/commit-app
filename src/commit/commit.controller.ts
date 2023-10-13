import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { CommitService } from './commit.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { QueriesListCommitDto } from './dto/query-get-list-commit-back.dto';
import { ListCommitResponse } from './dto/list-commit-response.dto';
@ApiTags('Commit')
@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @ApiOperation({
    description: 'Lista de commits confirmados del backend.',
  })
  @ApiOkResponse({
    type: ListCommitResponse,
  })
  @Get('list-commit-back')
  @HttpCode(HttpStatus.OK)
  async getListCommitBack(@Query() queries: QueriesListCommitDto) {
    return await this.commitService.getListCommitBack(queries);
  }

  @ApiOperation({
    description: 'Lista de commits confirmados del frontend.',
  })
  @ApiOkResponse({
    type: ListCommitResponse,
  })
  @Get('list-commit-front')
  @HttpCode(HttpStatus.OK)
  async getListCommitFront(@Query() queries: QueriesListCommitDto) {
    return await this.commitService.getListCommitFront(queries);
  }
}
