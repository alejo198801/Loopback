import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Facultad,
  Profesor,
} from '../models';
import {FacultadRepository} from '../repositories';

export class FacultadProfesorController {
  constructor(
    @repository(FacultadRepository)
    public facultadRepository: FacultadRepository,
  ) { }

  @get('/facultads/{id}/profesor', {
    responses: {
      '200': {
        description: 'Profesor belonging to Facultad',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Profesor)},
          },
        },
      },
    },
  })
  async getProfesor(
    @param.path.string('id') id: typeof Facultad.prototype.facultad_id,
  ): Promise<Profesor> {
    return this.facultadRepository.profesor(id);
  }
}
