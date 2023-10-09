import { Module } from '@nestjs/common';
import { CommitController } from './commit.controller';
import { CommitService } from './commit.service';
import { commitProviders } from './commit.providers';

@Module({
  controllers: [CommitController],
  providers: [CommitService, ...commitProviders],
})
export class CommitModule {}
