import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GithubApiService } from 'src/shared/services/github-api.service';

@Injectable()
export class GetListCommitBackUsecase {
  constructor(private readonly _githubApiService: GithubApiService) {}
  async handle() {
    try {
      const { GITHUB_API_URL_COMMITS_BACK } = process.env;
      return await this._githubApiService.getCommits(
        GITHUB_API_URL_COMMITS_BACK,
      );
    } catch (e) {
      throw new InternalServerErrorException({
        error: {
          type: 'error_get_list_commits',
          message: 'An error occurred while obtaining the service commits.',
        },
      });
    }
  }
}
