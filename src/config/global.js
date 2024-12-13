export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'Marco normativo y técnico en seguridad y salud en el trabajo en Colombia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Marco normativo en seguridad y salud en el trabajo en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ley 1562 del 2012 en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Decreto 1072 del 2015',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Resolución 0312 del 2019',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'ISO 45001 del 2018',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Rodríguez Mesa, R. (2016). Sistema general de riesgos laborales: Decretos 1477 y 1507 de 2014, Decreto Único Reglamentario del Sector Trabajo 1072 de 2015: (2 ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69979',
    },
    {
      referencia:
        'Congreso de Colombia (Julio 11 de 2012) Ley 1562 de 2012. Ministerio de Trabajo. Colombia.',
      link: 'http://www.mintrabajo.gov.co/normatividad/leyes/2012.html',
    },
    {
      referencia:
        'República de Colombia. (Mayo 26 de 2015) Decreto 1072 de 2015. Ministerio de Trabajo. Colombia.',
      link:
        'http://www.mintrabajo.gov.co/normatividad/decreto-unico-reglamentario-trabajo.html',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Resolución 0312 de 2019: Estándares mínimos del sistema de la seguridad y salud en el trabajo.',
      link:
        'http://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia:
        'Ministerio de Trabajo de Colombia. (2016). Resolución 4927 de 2016.',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_mtra_4927_2016.htm?q=4927',
    },
    {
      referencia:
        'Cortés, J. M. (2018). Sistemas de gestión de la seguridad y salud en el trabajo (ISO 45001:2018): (1 ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/225263',
    },
    {
      referencia:
        'Cortés, J. M. (2017). Sistemas de gestión de calidad (ISO 9001:2015): ( ed.). Editorial ICB.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56053',
    },
    {
      referencia:
        'ISO (Organización Internacional de Normalización). (2017). ISO 14001:2015 para la pequeña empresa: ( ed.). AENOR - Asociación Española de Normalización y Certificación.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/53622',
    },
    {
      referencia: 'Colmena Seguros. (s.f.). ABECE: Decreto 1072.',
      link:
        'https://www.colmenaseguros.com/documents/34929/40804/ABECE-Decreto-1072.pdf/ea961174-eb09-79d1-23b1-8a4e2aa72057?t=1702311076408',
    },
    {
      referencia: 'Safety A. (2019). Resolución 0312 de 2019.',
      link: 'https://safetya.co/normatividad/resolucion-0312-de-2019/#a3',
    },
  ],
  glosario: [
    {
      termino: 'SG-SST',
      significado:
        'sistema de gestión de la seguridad y salud en el trabajo. Conjunto de políticas, procesos y procedimientos enfocados en la gestión de los riesgos laborales.',
    },
    {
      termino: 'Sistema General de Riesgos Laborales',
      significado:
        'es el conjunto de entidades públicas y privadas, normas y procedimientos, destinados a prevenir, proteger y atender a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desarrollan',
    },
    {
      termino: 'Matriz Legal',
      significado:
        'es la compilación de los requisitos normativos exigibles a la empresa acorde con las actividades propias e inherentes de su actividad productiva, los cuales dan los lineamientos normativos y técnicos para desarrollar el Sistema de gestión de la seguridad y salud en el trabajo (SG-SST), el cual deberá actualizarse en la medida que sean emitidas nuevas disposiciones aplicables.',
    },
    {
      termino: 'Peligro',
      significado:
        'fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones.',
    },
    {
      termino: 'Riesgo',
      significado:
        'combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por estos.',
    },
    {
      termino: 'Valoración del riesgo',
      significado:
        'consiste en emitir un juicio sobre la tolerancia o no del riesgo estimado.',
    },
    {
      termino: 'Trabajador',
      significado:
        'persona que realiza trabajo o actividades relacionadas con el trabajo que están bajo el control de la organización.',
    },
    {
      termino: 'Lugar de trabajo',
      significado:
        'lugar bajo el control de la organización donde una persona necesita estar o ir por razones de trabajo.',
    },
    {
      termino: 'Requisitos legales y otros requisitos',
      significado:
        'requisitos legales que una organización tiene que cumplir y otros requisitos que una organización tiene que cumplir o que elige cumplir.',
    },
    {
      termino: 'Auditoría',
      significado:
        'proceso sistemático, independiente y documentado para obtener las evidencias de auditoría y evaluarlas de manera objetiva con el fin de determinar el grado en el que se cumplen los criterios de auditoría.',
    },
    {
      termino: 'Mejora continua',
      significado: 'actividad recurrente para mejorar el desempeño.',
    },
  ],
}
