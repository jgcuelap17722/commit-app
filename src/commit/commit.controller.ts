import { Controller, Get } from '@nestjs/common';
import { CommitService } from './commit.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Commit')
@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @Get('list-commit')
  async getListCommit() {
    return await this.commitService.getListCommit();
  }
}
