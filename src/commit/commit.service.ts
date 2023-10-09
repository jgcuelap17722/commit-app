import { Injectable } from '@nestjs/common';
import { GetListCommitUsecase } from './application/usecases/get-list-commit.usecase';

@Injectable()
export class CommitService {
  constructor(private readonly _getListCommitUsecase: GetListCommitUsecase) {}
  async getListCommit() {
    return await this._getListCommitUsecase.handle();
  }
}
