import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { GithubApiService } from 'src/shared/services/github-api.service';

@Injectable()
export class GetListCommitUsecase {
  constructor(private readonly _githubApiService: GithubApiService) {}
  async handle() {
    try {
      return await this._githubApiService.getCommits();
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
