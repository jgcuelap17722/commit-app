import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubApiService {
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
      return response.data;
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
