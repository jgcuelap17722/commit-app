import { Controller, Get } from '@nestjs/common';
import { CommitService } from './commit.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Commit')
@Controller('commit')
export class CommitController {
  constructor(private readonly commitService: CommitService) {}

  @Get('list-commit-back')
  async getListCommitBack() {
    return await this.commitService.getListCommitBack();
  }

  @Get('list-commit-front')
  async getListCommitFront() {
    return await this.commitService.getListCommitFront();
  }
}
