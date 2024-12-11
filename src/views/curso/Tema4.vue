<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Resolución 0312 del 2019'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 A continuación, conozcamos algunos aspectos importantes de esta Resolución:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.png', alt='')
      .col-lg-8
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="¿Qué establece?") Para abordar esta norma técnica, de gran relevancia, que establece los estándares mínimos de seguridad y salud en el trabajo para las empresas en Colombia, debemos saber que la implementación de un Sistema de Gestión de Seguridad y Salud en el Trabajo, contiene múltiples ítems que son rigurosos de cumplir; sin embargo, esta resolución facilita la ejecución, dado que establece una serie de estándares mínimos que las empresas deben seguir en el ámbito de la seguridad y salud laboral, siendo su cumplimiento, obligatorio para todas las empresas del país.
          p.text-small(numero="2" titulo="Objetivos") En esencia, la Resolución 0312 del 2019, tiene como objetivo asegurar que los trabajadores realicen sus tareas en entornos seguros y saludables, mediante la identificación, evaluación y gestión de los riesgos laborales que puedan existir en su lugar de trabajo. Es fundamental resaltar que adherirse a esta normativa no solo protege a los trabajadores, sino que también puede prevenir sanciones costosas por parte de las autoridades competentes.
          p.text-small(numero="3" titulo="Estándares mínimos") Los estándares mínimos constituyen un conjunto de normas, requisitos y procedimientos, que los empleadores y contratistas deben cumplir, de manera obligatoria. Estos regulan las condiciones esenciales para el adecuado funcionamiento y desarrollo de actividades dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Su implementación se adapta a cada empresa o entidad, según la cantidad de trabajadores, la actividad económica que realizan y los oficios que desempeñan.
    h2 Estimulación múltiple en adultos mayores
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .p-4(data-aos="fade-left" style="background-color: #FEF0CB").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/39.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los estándares mínimos constituyen un conjunto de normas, requisitos y procedimientos que los empleadores y contratistas deben cumplir, de manera obligatoria.
        p.mb-0 Estos estándares establecen y regulan las condiciones esenciales para el adecuado funcionamiento y desarrollo de actividades dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST). Su implementación se adapta a cada empresa o entidad según su número de trabajadores, la actividad económica que realizan y los oficios que desempeñan.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/40.png', alt='')
    p.mb-5 Los siguientes estándares mínimos, son aplicables a todas las empresas y deben ser considerados:
    .p-5(style="background-color:#E8EEFD")
    
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
