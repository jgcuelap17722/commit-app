import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { CommitMapper } from 'src/commit/application/usecases/commit.mapper';
import { CommitEntity } from 'src/commit/models/commit.entity';
import { format } from 'date-fns';

@Injectable()
export class GithubApiService {
  constructor(private readonly _commitMapper: CommitMapper) {}
  async getCommits() {
    try {
      const { GITHUB_API_URL_COMMITS, GITHUB_API_KEY } = process.env;

      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${GITHUB_API_KEY}`,
        },
      };

      const response = await axios.get(
        `${GITHUB_API_URL_COMMITS}`,
        axiosConfig,
      );

      const finalResponse: CommitEntity[] = response.data.map((commit: any) => {
        return {
          author: commit.commit.author.name,
          email: commit.commit.author.email,
          date: format(
            new Date(commit.commit.committer.date),
            'dd/MM/yyyy HH:mm',
          ),
          sha: commit.sha,
          message: commit.commit.message,
          avatar_url: commit.committer.avatar_url,
        };
      });

      return this._commitMapper.toDomains(finalResponse);
    } catch (e) {
      throw new InternalServerErrorException({
        error: {
          type: 'error_get_api_github',
          message: 'An error occurred while fetching the github api commits.',
        },
      });
    }
  }
}
