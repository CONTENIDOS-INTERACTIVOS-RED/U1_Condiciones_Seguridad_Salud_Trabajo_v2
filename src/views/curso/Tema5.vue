<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. ISO 45001 del 2018'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5
    .bg-full-width.bg-color-2
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") ISO 45001 del 2018
            p.mb-4(data-aos="fade-right") A través del PDF ISO 45001 del 2018, abordaremos la norma que establece el sistema de gestión para la seguridad y salud en el trabajo, daremos una mirada a este estándar internacional y realizaremos un recorrido por los aspectos más importantes, explorando sus principios, requisitos y la forma en que puede ser implementada en nuestro entorno laboral. La ISO 45001:2018 no solo es una herramienta clave para mejorar la gestión de la seguridad y la salud en el trabajo, sino que también representa una oportunidad valiosa para garantizar un ambiente laboral más seguro y productivo.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> ISO 45001 del 2018

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/70.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad.mb-0
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

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
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/53622" target="_blank" rel="noopener noreferrer") ISO (Organización Internacional de Normalización). (2017). ISO 14001:2015 para la pequeña empresa: ( ed.). AENOR - Asociación Española de Normalización y Certificación.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Condiciones de seguridad y salud en el trabajo',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es el objetivo principal de la formación en seguridad y salud en el trabajo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumentar la producción',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Proteger la salud de los trabajadores',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reducir costos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Mejorar la imagen corporativa',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El objetivo principal de la formación en seguridad y salud en el trabajo es proteger la salud de los trabajadores.',
            mensaje_incorrecto:
              'Incorrecto. Revisa el objetivo principal de la formación en seguridad y salud en el trabajo.',
          },
          {
            id: 2,
            texto:
              '¿Qué norma establece el Sistema General de Riesgos Laborales en Colombia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ley 1562 de 2012',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Decreto 1072 de 2015',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Resolución 0312 de 2019',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'ISO 45001:2018',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La Ley 1562 de 2012 establece el Sistema General de Riesgos Laborales en Colombia.',
            mensaje_incorrecto:
              'Incorrecto. Revisa la norma que establece el Sistema General de Riesgos Laborales en Colombia.',
          },
          {
            id: 3,
            texto:
              '¿Qué entidad supervisa el cumplimiento de la Ley 1562 de 2012?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ministerio de Salud',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ministerio del Trabajo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Asociación de Riesgos Laborales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Organización Internacional del Trabajo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El Ministerio del Trabajo supervisa el cumplimiento de la Ley 1562 de 2012.',
            mensaje_incorrecto:
              'Incorrecto. Revisa qué entidad supervisa el cumplimiento de la Ley 1562 de 2012.',
          },
          {
            id: 4,
            texto:
              'La Resolución 0312 de 2019 establece estándares mínimos para:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El desarrollo organizacional',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La educación formal',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La seguridad y salud en el trabajo',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La gestión ambiental',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La Resolución 0312 de 2019 establece estándares mínimos para la seguridad y salud en el trabajo.',
            mensaje_incorrecto:
              'Incorrecto. Revisa para qué establece estándares mínimos la Resolución 0312 de 2019.',
          },
          {
            id: 5,
            texto: '¿Qué aspecto se enfatiza en la normativa ISO 45001?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reducción de costos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Liderazgo y compromiso',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reinversión de utilidades',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aumento de ventas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! En la normativa ISO 45001 se enfatiza el liderazgo y compromiso.',
            mensaje_incorrecto:
              'Incorrecto. Revisa qué aspecto se enfatiza en la normativa ISO 45001.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
