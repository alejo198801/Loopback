import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Estudiante, EstudianteRelations, Facultad, Registro} from '../models';
import {FacultadRepository} from './facultad.repository';
import {RegistroRepository} from './registro.repository';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.codigo_id,
  EstudianteRelations
> {

  public readonly facultads: HasManyRepositoryFactory<Facultad, typeof Estudiante.prototype.codigo_id>;

  public readonly registro: HasOneRepositoryFactory<Registro, typeof Estudiante.prototype.codigo_id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('FacultadRepository') protected facultadRepositoryGetter: Getter<FacultadRepository>, @repository.getter('RegistroRepository') protected registroRepositoryGetter: Getter<RegistroRepository>,
  ) {
    super(Estudiante, dataSource);
    this.registro = this.createHasOneRepositoryFactoryFor('registro', registroRepositoryGetter);
    this.registerInclusionResolver('registro', this.registro.inclusionResolver);
    this.facultads = this.createHasManyRepositoryFactoryFor('facultads', facultadRepositoryGetter,);
    this.registerInclusionResolver('facultads', this.facultads.inclusionResolver);
  }
}
