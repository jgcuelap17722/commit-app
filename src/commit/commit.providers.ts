import { GithubApiService } from 'src/shared/services/github-api.service';
import { GetListCommitUsecase } from './application/usecases/get-list-commit.usecase';

export const commitProviders = [GetListCommitUsecase, GithubApiService];
