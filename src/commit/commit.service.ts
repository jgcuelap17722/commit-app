import { Injectable } from '@nestjs/common';
import { GetListCommitBackUsecase } from './application/usecases/get-list-commit-back.usecase';
import { GetListCommitFrontUsecase } from './application/usecases/get-list-commit-front.usecase';
import { QueriesListCommitDto } from './dto/query-get-list-commit-back.dto';

@Injectable()
export class CommitService {
  constructor(
    private readonly _getListCommitBackUsecase: GetListCommitBackUsecase,
    private readonly _getListCommitFrontUsecase: GetListCommitFrontUsecase,
  ) {}
  async getListCommitBack(queries: QueriesListCommitDto) {
    return await this._getListCommitBackUsecase.handle(queries);
  }

  async getListCommitFront(queries: QueriesListCommitDto) {
    return await this._getListCommitFrontUsecase.handle(queries);
  }
}
