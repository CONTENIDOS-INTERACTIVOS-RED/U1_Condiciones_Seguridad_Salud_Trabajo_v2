<template lang="pug">
.linea-tiempo-d
  .linea-tiempo-d__item.row(
    v-for="(item, index) in elements"
    :key="'linea-tiempo-d-key-'+item.id"
    :class="{'linea-tiempo-d__item--selected' : selected === item.id}"
  )
    .col-auto.linea-tiempo-d__item__col-number
      .linea-tiempo-d__item__number.tarjeta.tarjeta--gris(
        :class="[,{'px-3' : item.numero.length > 1}]"
         @click="selected = item.id"
         @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
      )
        .indicador__container(v-if="mostrarIndicador && index === 1")
          .indicador--click
        span(v-html="item.numero")

    .col(:class="{'mb-4' : index < elements.length -1}")
      .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
        .linea-tiempo-d__item__content__title.px-3.justify-content-between(
          :class="{'active' : selected === item.id}"
          @click="selected = item.id"
          @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
        )
          span(v-html="item.titulo")
          i.fas.fa-angle-up(v-if="selected === item.id")
          i.fas.fa-angle-down(v-else)
        .linea-tiempo-d__item__content__slot(
          :style="{ height: rendered && selected === item.id ? getActiveHeight(item.id) : 0 } "
        )
          .p-3(:ref="item.id" v-child="item.elm" )

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'LineaTiempoD',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style lang="sass">
.linea-tiempo-d__item__content__title
  padding: 28px
  border-radius: 5px 5px 0px 0px
  background-color: #EAFBF9
.linea-tiempo-d__item__content__title.active
  background-color: #B0F1E9
.linea-tiempo-d__item__content__slot
  border-radius: 0px 0px 5px 5px
  background-color: #EAFBF9
.linea-tiempo-d__item__number
  background-color: #EAFBF9
.linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #B0F1E9 !important
.slyder-a__tipo-b
  background-color: #11413B
.slyder-a__bullets__item--active
  background-color: #3CDDCA
  border-color: #3CDDCA
</style>
