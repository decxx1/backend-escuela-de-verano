import type { Schema, Struct } from '@strapi/strapi';

export interface FechasIngresoSalidaGuardia extends Struct.ComponentSchema {
  collectionName: 'components_fechas_ingreso_salida_guardias';
  info: {
    displayName: 'Ingreso-salida-guardia';
    icon: 'hashtag';
  };
  attributes: {
    ingreso: Schema.Attribute.Time;
    Salida: Schema.Attribute.Time;
    Turno: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fechas.ingreso-salida-guardia': FechasIngresoSalidaGuardia;
    }
  }
}
