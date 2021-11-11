import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;
