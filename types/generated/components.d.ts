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

export interface TablasColumna extends Struct.ComponentSchema {
  collectionName: 'components_tablas_columnas';
  info: {
    displayName: 'Columna';
    icon: 'apps';
  };
  attributes: {
    Contenido: Schema.Attribute.String;
    Encabezado: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fechas.ingreso-salida-guardia': FechasIngresoSalidaGuardia;
      'tablas.columna': TablasColumna;
    }
  }
}
