import { GithubApiService } from 'src/shared/services/github-api.service';
import { GetListCommitUsecase } from './application/usecases/get-list-commit.usecase';
import { CommitMapper } from './application/usecases/commit.mapper';

export const commitProviders = [
  GetListCommitUsecase,
  GithubApiService,
  CommitMapper,
];
