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
  Estudiante,
} from '../models';
import {FacultadRepository} from '../repositories';

export class FacultadEstudianteController {
  constructor(
    @repository(FacultadRepository)
    public facultadRepository: FacultadRepository,
  ) { }

  @get('/facultads/{id}/estudiante', {
    responses: {
      '200': {
        description: 'Estudiante belonging to Facultad',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Estudiante)},
          },
        },
      },
    },
  })
  async getEstudiante(
    @param.path.string('id') id: typeof Facultad.prototype.facultad_id,
  ): Promise<Estudiante> {
    return this.facultadRepository.estudiante(id);
  }
}
