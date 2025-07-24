<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Marco normativo en seguridad y salud en el trabajo en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-full-width(style="background-color: #e2e9f3 ")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-lg-0.mb-3
            h2.mb-4(data-aos="flip-up") Marco normativo en seguridad y salud en el trabajo en Colombia
            p.mb-4(data-aos="fade-right") El marco normativo en seguridad y salud en el trabajo en Colombia constituye la base para garantizar entornos laborales seguros, prevenir accidentes y enfermedades laborales, y fomentar el bienestar físico y mental de los trabajadores. A continuación, en el PDF Marco normativo, se analizan las principales leyes, decretos y resoluciones que rigen esta área, destacando la responsabilidad compartida entre empleadores y trabajadores en la implementación de sistemas de gestión efectivos. A través de este estudio, se busca formar agentes de cambio comprometidos con la construcción de ambientes laborales más seguros y saludables para todos.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong>  Marco normativo.

          .col-lg-4.col-7
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/7.png', alt='')


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69979" target="_blank" rel="noopener noreferrer") Rodríguez Mesa, R. (2016). Sistema general de riesgos laborales: Decretos 1477 y 1507 de 2014, Decreto Único Reglamentario del Sector Trabajo 1072 de 2015: (2 ed.). Universidad del Norte.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=kxG_WgX1hZI" target="_blank" rel="noopener noreferrer") MMEKII. (2019b, mayo 6). Ley 1562 del 2012 [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://safetya.co/" target="_blank" rel="noopener noreferrer") SafetYA. (s. f.). SafetYA, noticias sobre seguridad y salud en el trabajo. SafetYA®.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
