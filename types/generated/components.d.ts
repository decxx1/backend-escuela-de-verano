import type { Schema, Struct } from '@strapi/strapi';

export interface FechasIngresoSalidaGuardia extends Struct.ComponentSchema {
  collectionName: 'components_fechas_ingreso_salida_guardias';
  info: {
    displayName: 'Ingreso-salida-guardia';
    icon: 'hashtag';
  };
  attributes: {
    Ingreso: Schema.Attribute.String;
    Salida: Schema.Attribute.String;
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
    Division: Schema.Attribute.String & Schema.Attribute.Required;
    Edades: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TablasCondicion extends Struct.ComponentSchema {
  collectionName: 'components_tablas_condicions';
  info: {
    displayName: 'Condiciones';
    icon: 'calendar';
  };
  attributes: {
    Condicion: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Socios'>;
    precios: Schema.Attribute.Component<'tablas.precios', true>;
  };
}

export interface TablasPrecios extends Struct.ComponentSchema {
  collectionName: 'components_tablas_precios';
  info: {
    displayName: 'precios';
    icon: 'strikeThrough';
  };
  attributes: {
    MedioDePago: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Efectivo'>;
    Precio: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
  };
}

export interface TablasTurno extends Struct.ComponentSchema {
  collectionName: 'components_tablas_turnos';
  info: {
    displayName: 'Turnos';
    icon: 'globe';
  };
  attributes: {
    Condiciones: Schema.Attribute.Component<'tablas.condicion', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    Turno: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ma\u00F1ana'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'fechas.ingreso-salida-guardia': FechasIngresoSalidaGuardia;
      'tablas.columna': TablasColumna;
      'tablas.condicion': TablasCondicion;
      'tablas.precios': TablasPrecios;
      'tablas.turno': TablasTurno;
    }
  }
}
