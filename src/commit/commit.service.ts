import { Injectable } from '@nestjs/common';
import { GetListCommitBackUsecase } from './application/usecases/get-list-commit-back.usecase';
import { GetListCommitFrontUsecase } from './application/usecases/get-list-commit-front.usecase';

@Injectable()
export class CommitService {
  constructor(
    private readonly _getListCommitBackUsecase: GetListCommitBackUsecase,
    private readonly _getListCommitFrontUsecase: GetListCommitFrontUsecase,
  ) {}
  async getListCommitBack() {
    return await this._getListCommitBackUsecase.handle();
  }

  async getListCommitFront() {
    return await this._getListCommitFrontUsecase.handle();
  }
}
