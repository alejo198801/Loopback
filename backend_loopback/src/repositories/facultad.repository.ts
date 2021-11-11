import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Facultad, FacultadRelations} from '../models';

export class FacultadRepository extends DefaultCrudRepository<
  Facultad,
  typeof Facultad.prototype.facultad_id,
  FacultadRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Facultad, dataSource);
  }
}
