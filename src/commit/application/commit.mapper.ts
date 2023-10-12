import { CommitClass } from 'src/commit/models/commit.class';
import { CommitEntity } from 'src/commit/models/commit.entity';
import { MapperInterface } from 'src/shared/interfaces/mapper.interface';

export class CommitMapper
  implements MapperInterface<CommitEntity, CommitClass>
{
  toDomain(entity: CommitEntity): CommitClass {
    if (!entity) return null;

    return new CommitClass(entity);
  }
  toDomains(entities: CommitEntity[]): CommitClass[] {
    const commits = new Array<CommitClass>();
    for (const entity of entities) {
      const commit = this.toDomain(entity);
      if (commit) commits.push(commit);
    }

    return commits;
  }
}
