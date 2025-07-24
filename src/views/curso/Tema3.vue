<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Decreto 1072 del 2015'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3.order-2
        p.mb-4 Al abordar esta normativa, debemos tener en cuenta que se presenta como el “Decreto Único Reglamentario del Sector Trabajo” en Colombia. Este reglamento se convierte en la columna vertebral de las prácticas de seguridad y salud en el trabajo, regulando las condiciones laborales de todos los trabajadores en el país. Es esencial entender que esta normativa tiene sus raíces en la necesidad de minimizar riesgos y garantizar un ambiente laboral propicio. 
        .p-4(data-aos="fade-left" style="background-color: #F7DBD5").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0  La relevancia radica en establecer disposiciones para implementar un sistema de gestión de seguridad y salud en el trabajo (SG-SST), en todos los niveles de organizaciones, con el objetivo de garantizar un entorno laboral seguro y saludable. Este Decreto integra lineamientos tanto para el sector público como para el privado y enfatiza la responsabilidad de los empleadores en la creación de condiciones adecuadas de trabajo. 
      .col-lg-4.col-7: img(src='@/assets/curso/temas/19.png', alt='')
    p.mb-4 El Decreto toca diversos aspectos que son esenciales para el bienestar de los trabajadores. A continuación, se detallarán algunos de los temas más relevantes:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Prevención de riesgos laborales y enfermedades laborales") Se establece un marco para identificar, evaluar y controlar los riesgos presentes en el entorno laboral. Se busca no solo proteger la salud y seguridad de los trabajadores, sino también fomentar un ambiente de trabajo saludable que promueva el bienestar físico y mental.
            br
            |Para lograrlo, es fundamental implementar políticas de prevención que incluyan la capacitación continua de los trabajadores sobre los riesgos asociados a sus tareas, el uso adecuado de equipos de protección personal (EPP), y la promoción de prácticas seguras en el trabajo. Además, se deben llevar a cabo evaluaciones periódicas de riesgos, así como auditorías internas que permitan identificar áreas de mejora y garantizar el cumplimiento de las normativas vigentes.
          p.text-small(numero="2" titulo="Responsabilidad de los trabajadores") La participación de todos los trabajadores en la cultura de seguridad, también es crucial. A través de la comunicación abierta y el fortalecimiento del trabajo en equipo, se puede crear un entorno donde cada trabajador se sienta responsable de su propia seguridad y la de sus compañeros. La promoción de una cultura de prevención no solo reduce la incidencia de accidentes y enfermedades laborales, sino que también contribuye a aumentar la productividad y mejorar el clima laboral.
          p.text-small(numero="3" titulo="Seguridad y salud en el trabajo") Se establecen disposiciones acerca de las condiciones bajo las cuales se deben desarrollar las actividades laborales, priorizando la integridad física y mental de los trabajadores. Esto incluye la implementación de medidas de prevención y control de riesgos y la promoción de un ambiente laboral saludable.
          p.text-small(numero="4" titulo="Capacitación y formación") Subraya la importancia de equipar a los trabajadores con los conocimientos necesarios para interactuar de manera segura en sus actividades laborales.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/21.png', alt='')
    p.mb-4 El Decreto 1072 del 2015, establece una serie de responsabilidades que los empleadores deben cumplir para garantizar un ambiente laboral seguro. Estas obligaciones incluyen:
    .bg-slyder.bg-full-width.p-5.mb-5
      SlyderA(tipo='b')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Definir la política de seguridad y salud en el trabajo
            p.mb-0 El empleador debe establecer y documentar una política de seguridad y salud en el trabajo, que refleje el compromiso de la organización con el bienestar de sus trabajadores.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/22.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Identificación de peligros y evaluación de riesgos
            p.mb-0 El empleador debe realizar la identificación de peligros, la evaluación de riesgos y determinar los controles necesarios para prevenir accidentes y enfermedades laborales.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/23.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Planificación y programación
            p.mb-0 Se debe diseñar un plan de trabajo con medidas y programas de prevención y promoción de la salud, que incluya objetivos, metas y responsabilidades.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/24.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Consulta y participación de los trabajadores
            p.mb-0 Fomentar la participación de los trabajadores en la implementación del sistema de gestión para la seguridad y salud en el trabajo, es fundamental. Esto incluye su consulta en la identificación de riesgos y en la toma de decisiones sobre las políticas de seguridad.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/25.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Proveer recursos y medios para la implementación
            p.mb-0 Es obligación del empleador proporcionar los recursos necesarios (humanos, técnicos y financieros) para el adecuado funcionamiento del sistema de gestión para la seguridad y salud en el trabajo.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/26.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Vigilancia de la salud de los trabajadores
            p.mb-0 Implementar un programa de vigilancia de la salud de los trabajadores, que incluya exámenes médicos y seguimientos pertinentes, para detectar posibles afectaciones.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/27.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Investigación de accidentes y enfermedades
            p.mb-0 El empleador debe investigar los accidentes de trabajo y enfermedades ocupacionales, para identificar sus causas y tomar medidas preventivas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/28.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Seguimiento y evaluación
            p.mb-0 Establecer procedimientos para el seguimiento y evaluación permanente del sistema de gestión para la seguridad y salud en el trabajo, asegurando su mejora continua mediante el ciclo PVHA.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/29.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Documentación y registros
            p.mb-0 Mantener una adecuada documentación y registros de las actividades relacionadas con el SG-SST, que sirvan como evidencia del cumplimiento de las actividades implementadas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/30.png', alt='Texto que describa la imagen')
    p.mb-4 Estas son algunas de las obligaciones fundamentales del empleador en la implementación del SG-SST, según el Decreto 1072 del 2015. La correcta aplicación de estas obligaciones contribuye a la mejora de las condiciones de trabajo y al bienestar de los trabajadores.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3.order-2
        .p-4(data-aos="fade-left" style="background-color: #F7DBD5").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0  Los empleadores deben rendir cuentas sobre el desempeño del sistema de gestión de SST y estar siempre atentos a la normatividad vigente en esta área.
        p.mb-4 Mientras que los empleadores tienen múltiples responsabilidades, los trabajadores también deben cumplir con ciertas obligaciones. Es esencial que, como profesionales, se fomente en los trabajadores la importancia de:
      .col-lg-4.col-7: img(src='@/assets/curso/temas/31.png', alt='')
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.col-xl-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/33.png" alt="")
          .text-center.custom-image-card__text.p-4
            h4 Cumplir las normas de Seguridad
            p.mb-0 Un compromiso directo con los procedimientos y reglas establecidas para prevenir accidentes de trabajo y enfermedades laborales.
      .col-lg-4.col-xl-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/34.png" alt="")
          .text-center.custom-image-card__text.p-4
            h4 Utilizar elementos de protección personal
            p.mb-0 Es crucial que los trabajadores hagan uso de los equipos que les son proporcionados para su resguardo.
      .col-lg-4.col-xl-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/35.png" alt="")
          .text-center.custom-image-card__text.p-4
            h4 Informar sobre riesgos
            p.mb-0 Cualquier riesgo identificado, debe ser comunicado al empleador para evitar accidentes laborales.
      .col-lg-4.col-xl-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/36.png" alt="")
          .text-center.custom-image-card__text.p-4
            h4 Colaborar en la implementación de medidas preventivas
            p.mb-0 La participación de los trabajadores en el desarrollo de una cultura de seguridad, es fundamental para el éxito del sistema.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .p-4.h-100.tarjeta(style="background-color: #D8F5F5")
          p.mb-4 En Colombia, todas las empresas, sin importar su tamaño o sector, están obligadas a implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo. Esto incluye tanto a los empleadores públicos como a los privados, y abarca a todos los trabajadores, independientemente de su tipo de contratación.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/37.png', alt='')
      .col-lg-4
        .p-4.h-100.tarjeta(style="background-color: #FEE3D8")
          p.mb-0 Esta normatividad, anteriormente mencionada, no solo es un reglamento, sino una herramienta poderosa que busca mejorar las condiciones laborales en Colombia. Al comprender a fondo su estructura, objetivos y obligaciones.
    .row.justify-content-center.align-items-center.mb-0
          .col-lg-10

            .bg-color-white.shadow-soft.py-4.px-lg-5
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Decreto 1072 de 2015.
                      p Para profundizar, lo invito a descargar el ABC del decreto 1072 de 2015.
                    .col-sm-auto
                      a.boton.color-acento-botones(href="https://www.colmenaseguros.com/documents/34929/40804/ABECE-Decreto-1072.pdf/ea961174-eb09-79d1-23b1-8a4e2aa72057?t=1702311076408" target="_blank")
                        span Descargar
                        i.fas.fa-arrow-right


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.colmenaseguros.com/documents/34929/40804/ABECE-Decreto-1072.pdf/ea961174-eb09-79d1-23b1-8a4e2aa72057?t=1702311076408" target="_blank" rel="noopener noreferrer") Colmena Seguros. (s.f.). ABECÉ: Decreto 1072.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://safetya.co/normatividad/resolucion-0312-de-2019/#a3" target="_blank" rel="noopener noreferrer") Safety A. (2019). Resolución 0312 de 2019.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=9aveK0Ktszk" target="_blank" rel="noopener noreferrer") CATP Consultor. (2022, 5 junio). ESTANDARES PARA EMPRESAS + DE 50 TRABAJADORES y MENOS DE 50 RIESGO IV o V RESOLUCION 0312 DE 2019 [Vídeo]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>
