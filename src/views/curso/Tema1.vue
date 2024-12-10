<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'NOMBRE TEMA 3'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Título de segundo
    .row.justify-content-between.mb-5
      .col-md-6.col-lg-7
        p Desde los inicios de la humanidad, las reglas han sido un elemento fundamental para el desarrollo de las sociedades. El Derecho, en este contexto, se presenta como una herramienta indispensable para el buen funcionamiento de la convivencia. En esta primera unidad, se profundizará en el concepto de Derecho, su propósito y origen, así como en el proceso de creación de normas que regulan nuestras actividades diarias, las relaciones entre individuos y el Estado, y las normas que operan en el ámbito global.
      .col-md-6.col-lg-5
        //- .imagen-titulo--der debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        figure.mt-4.mt-lg-0
          img(src='@/assets/componentes/banner-img-1.png', alt='Texto que describa la imagen')
    #t_1_2.titulo-segundo.color-secundario
      h2 1.2  Acordeón
    .row.justify-content-between.mb-5
      .col-md-6.col-lg-7
        AcordionA(tipo="b")
          .row(titulo="Titulo item 1")
            .col
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

          div(titulo="Titulo item 2")
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
      .col-md-6.col-lg-5.col-xl-4.mx-xl-auto
        //- .imagen-titulo--der debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        figure
          img(src='@/assets/componentes/banner-img-2.png', alt='Texto que describa la imagen')
    #t_1_3.titulo-segundo.color-secundario.pb-5
      h2 1.3  Slider
    .row.position-relative.mb-5
      img.bg-img-1(src='../../assets/componentes/background-test.svg', alt='Texto que describa la imagen')
      SlyderA(tipo="b").bg-white
        .row.p-4.p-md-5
          .col-md-6.col-lg-7.mb-4.mb-md-0
            p.text-bold Coercibilidad
            p El derecho puede imponerse por la fuerza si es necesario. Cuando una persona incumple una norma jurídica, puede ser sancionada mediante multas, penas de prisión o la confiscación de bienes. Esta coercibilidad distingue al derecho de otros sistemas normativos que no cuentan con mecanismos de imposición obligatoria.
        
          .col-md-6.col-lg-5
            figure
              img(src='@/assets/componentes/banner-img-3.png', alt='Texto que describa la imagen')
        .row.p-4.p-md-5
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        .row.p-4.p-md-5
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
    #t_1_4.titulo-segundo.color-secundario.pt-5
      h2 1.4  Pestañas
    .row.mb-5
      TabsC.color-primario
        .tabs-content.border.px-4.p-md-5.py-3(titulo="The splendor of the mystery")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Celebrate your failures 1
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
            .col-md-6.col-lg-5.col-xl-4
              figure
                img(src='@/assets/componentes/banner-img-4.png', alt='Texto que describa la imagen')
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Jerarquía normativa")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Celebrate your failures 1
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
            .col-md-6.col-lg-5.col-xl-4
              figure
                img(src='@/assets/componentes/banner-img-4.png', alt='Texto que describa la imagen')
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Sentido amplio de la norma")
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0
              h4 Celebrate your failures 1
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
            .col-md-6.col-lg-5.col-xl-4
              figure
                img(src='@/assets/componentes/banner-img-4.png', alt='Texto que describa la imagen')
    #t_1_5.titulo-segundo.color-secundario.pt-5
      h2 1.5  Infografia interactiva
      
    .row.mb-5.justify-content-center.img-infografica.p-md-5
      .col-12.col-md-9
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/componentes/test-img-infogr.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="9%" y="19%" numero="+")
            .h5.mb-2 titulo
            p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

          .tarjeta.color-acento-botones.p-3(x="91%" y="81%" numero="+")
            .h5.mb-2 titulo
            p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

          .tarjeta.color-acento-botones.p-3(x="91%" y="19%" numero="+")
            .h5.mb-2 titulo
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

          .tarjeta.color-acento-botones.p-3(x="9%" y="81%" numero="+")
            .h5.mb-2 titulo
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    
    #t_1_6.titulo-segundo
      div.d-flex
        span.me-3 1.6  
        h2 Linea de tiempo D

    LineaTiempoD.color-secundario.mb-5
      p(numero="1" titulo="Praesent luctus") Lorem ipsum dolor sit amet, 
      p(numero="2" titulo="Praesent luctus") Lorem ipsum dolor sit amet, 
      p(numero="3" titulo="Praesent luctus") Lorem ipsum dolor sit amet, 
    
    #t_1_7.titulo-segundo
      div.d-flex
        span.me-3 1.7
        h2 Tarjeta de audio
    
      TarjetaAudio.color-primario.bg-white.mb-5(
        texto="Proceso de descarga de MySQL Server Community y MySQL Workbench"
        tiempo
        :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
        @audio-hover="mostrarIndicadorTarjetaAudio = false"
      )

    .bg-full-width.border-top-9-azul
      .px-4.p-md-5
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.text-small
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              span.text-small
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span.text-small
            p.d-flex.my-4
              img.me-3.mb-auto.mt-2(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              span.text-small
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Texto que describa la imagen')
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
