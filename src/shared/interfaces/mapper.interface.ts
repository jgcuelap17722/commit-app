export interface MapperInterface<E, C> {
  toDomain(entity: E): C;
  toDomains(entities: E[]): C[];
}
