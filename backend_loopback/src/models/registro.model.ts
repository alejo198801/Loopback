import {Entity, model, property} from '@loopback/repository';

@model()
export class Registro extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  registro_id?: string;

  @property({
    type: 'date',
    required: true,
  })
  registro_fecha: string;

  @property({
    type: 'boolean',
    required: true,
  })
  registro_acceso: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  registro_salida: boolean;

  @property({
    type: 'string',
    required: true,
  })
  registro_historial: string;


  constructor(data?: Partial<Registro>) {
    super(data);
  }
}

export interface RegistroRelations {
  // describe navigational properties here
}

export type RegistroWithRelations = Registro & RegistroRelations;
