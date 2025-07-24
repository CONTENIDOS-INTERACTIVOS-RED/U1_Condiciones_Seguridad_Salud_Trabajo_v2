<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Ley 1562 del 2012 en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    div(style="background-color: #F7DBD5 ").mb-4
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Es una normativa clave en la regulación de la salud y la seguridad en el trabajo en Colombia. Su propósito es el de establecer un Sistema General de Riesgos Laborales (SGRL), que promueva la salud de los trabajadores y prevenga los accidentes y enfermedades laborales. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/8.png', alt='')
    p.mb-4 A continuación, los invitamos a explorar los aspectos más relevantes de esta Ley, que tiene un impacto significativo en la vida laboral de muchos colombianos.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .p-4.h-100(style="background-color: #FEF0CB")
          p.mb-4 La legislación prescribe una serie de responsabilidades y funciones para todos los participantes en el entorno laboral, que abarca a empleadores, trabajadores, administradoras de riesgos laborales (ARL) y el gobierno.
          .d-flex.justify-content-end
            img(src='@/assets/curso/temas/9.svg', alt='' style='width: 90px')
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/10.png', alt='')
      .col-lg-4
        .p-4.h-100(style="background-color: #D7F8F4")
          p.mb-0  Su finalidad es la de asegurar que todos los trabajadores, sin distinción del tipo de relación laboral que posean, puedan acceder a medidas de prevención, protección y atención adecuadas ante las enfermedades y accidentes que puedan derivarse de sus actividades laborales.
    p.mb-4.fw-bold Algunos de los aspectos centrales que esta Ley aborda, incluyen:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Cobertura universal") La Ley amplía la cobertura del SGRL a todos los trabajadores, incluyendo aquellos que laboran de manera independiente, los trabajadores informales, estudiantes en prácticas, aprendices del SENA y pensionados que realizan actividades remuneradas. Esto garantiza que una mayor cantidad de personas, reciba protección ante riesgos laborales.
          p.text-small(numero="2" titulo="Afiliación y cotización") Es obligatorio que todos los trabajadores se afilien al SGRL, independientemente de su forma de vinculación. Además, deben realizar cotizaciones basadas en su nivel de riesgo y en su ingreso base de cotización.
          p.text-small(numero="3" titulo="Fondo de Riesgos Laborales") Se crea un Fondo de Riesgos Laborales, administrado por el Ministerio de Trabajo, que financia las prestaciones económicas, asistenciales y de rehabilitación, para los trabajadores afectados. Este fondo también se ocupa de promover acciones de prevención.
          p.text-small(numero="4" titulo="Regulación y supervisión") La Ley 1562 del 2012, está regulada por el Ministerio de Trabajo, que define las políticas y programas necesarios para la gestión del riesgo laboral. Este ministerio también se encarga de supervisar el cumplimiento de la Ley, asegurando que empleadores, trabajadores y las ARL, respeten las normativas establecidas. Se establecen, entonces, derechos y deberes claros para cada uno de los actores involucrados, junto con sanciones para quienes incumplan la Ley.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/11.png', alt='')
    h2 Impacto en la seguridad y salud en el trabajo
    p.mb-4 La Ley 1562 del 2012, ha tenido un impacto positivo en varios frentes:
    .bg-slyder.bg-full-width.p-5.mb-5
      SlyderA(tipo='b')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Ampliación del concepto de trabajador
            p.mb-0 La inclusión de una gama más amplia de trabajadores bajo la cobertura de riesgo laboral, fortalece la protección de aquellos que tradicionalmente habían quedado al margen.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/12.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Obligatoriedad de afiliación
            p.mb-0 Esta disposición asegura que todos tengan acceso a cobertura, elevando el estándar de protección en el ámbito laboral.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/13.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Fortalecimiento de funciones de inspección
            p.mb-0 El Ministerio del Trabajo puede imponer sanciones a quienes no cumplan con las normativas, creando un entorno más seguro y responsable.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/14.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Participación
            p.mb-0 Se fomenta la participación de empleadores y trabajadores en la creación de políticas de SST, a través de comités paritarios (COPASST). Esto promueve un enfoque colaborativo en la prevención de riesgos.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/15.png', alt='Texto que describa la imagen')
        .row.bg-white.p-5
          .col-lg-6.mb-4.mb-md-0
            h4 Promoción de cultura preventiva
            p.mb-0 La Ley impulsa la formación y la implementación del Sistema de Gestión de Seguridad y Salud Laboral (SG-SST), lo que ayuda a desarrollar una cultura de prevención sólida.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/16.png', alt='Texto que describa la imagen')
    p.mb-4 Estos cambios han contribuido a mejorar las condiciones de trabajo y la calidad de vida de los trabajadores, además de reducir los índices de accidente y enfermedad laboral en Colombia.
    //- .row.justify-content-center.align-items-center.mb-5
    //-   .col-lg-10

    //-     .bg-color-white.shadow-soft.py-4.px-lg-5
    //-       .row.justify-content-around.align-items-center
    //-         .col-md-auto
    //-           img(src="@/assets/curso/temas/video.svg", style="width: 90px;")
    //-         .col
    //-           .row.justify-content-between.align-items-center
    //-             .col.mb-3.mb-sm-0
    //-               h3.mb-1 Ley 1562 de 2012 - Sistema de Riesgos Laborales
    //-               p Para profundizar y conocer un poco más acerca de la Ley 1562 del 2012, lo invitamos a ver el siguiente video: 
    //-             .col-sm-auto
    //-               a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=v1z6tcwu-Rw" target="_blank")
    //-                 span Ver video
    //-                 i.fas.fa-arrow-right
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 La Ley se aplica a todos los sectores económicos, abarcando tanto actividades en el sector público, como en el privado. Establece obligaciones claras para empleadores y trabajadores en términos de prevención, atención y reparación de riesgos laborales, creando un marco normativo que busca proteger a todos los involucrados en relaciones laborales.
        .p-4(data-aos="fade-left" style="background-color: #F7DBD5").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0  En resumen, la Ley 1562 del 2012, representa un avance significativo en la protección de los trabajadores en Colombia, al establecer un marco normativo que busca garantizar la salud y la seguridad en el trabajo. Con su enfoque en la prevención, la cobertura universal y la participación de los trabajadores y empleadores, se abre un camino para mejorar las condiciones laborales en el país. 
      .col-lg-4.col-7: img(src='@/assets/curso/temas/18.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/225263" target="_blank" rel="noopener noreferrer") Cortés, J. M. (2018). Sistemas de gestión de la seguridad y salud en el trabajo (ISO 45001:2018): (1 ed.). Editorial ICB.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/56053" target="_blank" rel="noopener noreferrer") Cortés, J. M. (2017). Sistemas de gestión de calidad (ISO 9001:2015): ( ed.). Editorial ICB.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=jatFhYhmcFE" target="_blank" rel="noopener noreferrer") CATP Consultor. (2021, 1 octubre). IDENTIFICACION DE REQUISITOS LEGALES EN SEGURIDAD y SALUD EN EL TRABAJO [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ilo.org/" target="_blank" rel="noopener noreferrer") Organización Internacional del Trabajo (OIT)

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
