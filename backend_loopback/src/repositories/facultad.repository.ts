import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Facultad, FacultadRelations, Estudiante, Profesor} from '../models';
import {EstudianteRepository} from './estudiante.repository';
import {ProfesorRepository} from './profesor.repository';

export class FacultadRepository extends DefaultCrudRepository<
  Facultad,
  typeof Facultad.prototype.facultad_id,
  FacultadRelations
> {

  public readonly estudiante: BelongsToAccessor<Estudiante, typeof Facultad.prototype.facultad_id>;

  public readonly profesor: BelongsToAccessor<Profesor, typeof Facultad.prototype.facultad_id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('EstudianteRepository') protected estudianteRepositoryGetter: Getter<EstudianteRepository>, @repository.getter('ProfesorRepository') protected profesorRepositoryGetter: Getter<ProfesorRepository>,
  ) {
    super(Facultad, dataSource);
    this.profesor = this.createBelongsToAccessorFor('profesor', profesorRepositoryGetter,);
    this.registerInclusionResolver('profesor', this.profesor.inclusionResolver);
    this.estudiante = this.createBelongsToAccessorFor('estudiante', estudianteRepositoryGetter,);
    this.registerInclusionResolver('estudiante', this.estudiante.inclusionResolver);
  }
}
