import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QueriesListCommitDto } from 'src/commit/dto/query-get-list-commit-back.dto';
import { GithubApiService } from 'src/shared/services/github-api.service';

@Injectable()
export class GetListCommitBackUsecase {
  constructor(private readonly _githubApiService: GithubApiService) {}
  async handle(queries: QueriesListCommitDto) {
    try {
      const { page, limit } = queries;

      const { GITHUB_API_URL_COMMITS_BACK } = process.env;

      const listCommitsBack = await this._githubApiService.getCommits(
        GITHUB_API_URL_COMMITS_BACK,
      );

      const skip = (page - 1) * limit;
      const totalItems = listCommitsBack.length;
      const totalPages = Math.ceil(totalItems / limit);
      const listCommitFiltered = listCommitsBack.slice(skip, skip + limit);

      return {
        success: true,
        data: listCommitFiltered,
        pagination: {
          currentPage: Number(page),
          totalPages,
          totalItems,
        },
      };
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
