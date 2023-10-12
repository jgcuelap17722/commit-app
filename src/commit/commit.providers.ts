import { GithubApiService } from 'src/shared/services/github-api.service';
import { GetListCommitBackUsecase } from './application/usecases/get-list-commit-back.usecase';
import { CommitMapper } from './application/commit.mapper';
import { GetListCommitFrontUsecase } from './application/usecases/get-list-commit-front.usecase';

export const commitProviders = [
  GetListCommitBackUsecase,
  GetListCommitFrontUsecase,
  GithubApiService,
  CommitMapper,
];
