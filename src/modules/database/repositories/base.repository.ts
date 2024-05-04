import {
    DeepPartial,
    FindManyOptions,
    FindOneOptions,
    Repository,
  } from 'typeorm';

  export abstract class BaseRepository<Entity> {
    constructor(private repository: Repository<Entity>) {}

    findAll(options?: FindManyOptions<Entity>) {
      return this.repository.find(options);
    }

    findOne(options?: FindOneOptions<Entity>) {
      return this.repository.findOne(options);
    }

    save(entity: DeepPartial<Entity>) {
      return this.repository.save(entity);
    }

    update(id: number, entity: DeepPartial<Entity>) {
      return this.repository.save({ id, ...entity });
    }

    updateComplex(entities: DeepPartial<Entity>[]) {
      return this.repository.save(entities);
    }

    remove(id: number) {
      return this.repository.delete(id);
    }
  }
