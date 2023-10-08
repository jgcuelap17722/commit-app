import { Module } from '@nestjs/common';
import { CommitModule } from './commit/commit.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    CommitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
