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

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
