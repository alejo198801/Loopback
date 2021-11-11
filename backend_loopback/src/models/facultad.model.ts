import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Estudiante} from './estudiante.model';
import {Profesor} from './profesor.model';

@model()
export class Facultad extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  facultad_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  facultad_nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  facultad_direccion: string;

  @belongsTo(() => Estudiante)
  estudianteId: string;

  @belongsTo(() => Profesor)
  profesorId: string;

  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;
