<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    div(style="background-color: #fef7e4 ").mb-4
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En un mundo laboral en constante evolución, la seguridad y salud en el trabajo se han convertido en pilares fundamentales para el desarrollo sostenible de las organizaciones. Reconociendo esta necesidad, el presente proceso formativo se concibe como una herramienta esencial para la formación de profesionales competentes en el ámbito del diseño e implementación de sistema de gestión para la seguridad y salud en el trabajo y evaluación de las condiciones de trabajo seguras. Esta formación está diseñada para proporcionar a los estudiantes los conocimientos y las habilidades necesarios para identificar, evaluar, valorar y controlar riesgos laborales, asegurando así un entorno laboral sano y seguro.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/1.png', alt='')
    p.mb-4 Además, se fomenta la creación de una cultura de prevención que aborde, de manera proactiva, los accidentes y enfermedades laborales, alineándose con las normas técnicas colombianas e internacionales vigentes y los marcos normativos aplicables. Este enfoque no solo se limita a la enseñanza de procedimientos y regulaciones, sino que también promueve las estrategias para que el profesional integre, en su participación, a todos los miembros de la organización, desde la alta dirección hasta los trabajadores de base, en la construcción de entornos laborales seguros. En este sentido, el proceso formativo se convierte en un catalizador para el cambio, empoderando a los estudiantes a liderar iniciativas de transparencia y comunicación que posicionen la seguridad en un lugar central de la estrategia organizacional.
      br
      br
      | #[b La estructura del proceso formativo incluye tres unidades fundamentales:] 
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/2.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 El marco normativo y técnico en seguridad y salud en el trabajo en Colombia, que establece el contexto regulatorio y las mejores prácticas. 
      .col-lg-4.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/3.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 La identificación y evaluación de riesgos laborales, que proporciona herramientas para la detección temprana de peligros. 
      .col-lg-4.col-xl-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/temas/4.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 Estrategias para la implementación de un sistema de gestión de seguridad y salud en el trabajo, que guía a los estudiantes en el diseño de programas efectivos que promueven la prevención de riesgos. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/5.png', alt='')
      .col-lg-8
        .p-4(data-aos="fade-left" style="background-color: #d8f5f5 ").mb-4
          .row
            .col-lg-auto
              img(src="@/assets/curso/temas/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al finalizar este proceso formativo, los participantes no solo estarán equipados para cumplir con las exigencias legales en materia de seguridad y salud en el trabajo, sino que también contribuirán al bienestar integral de los trabajadores en diversos sectores productivos. Serán capaces de implementar programas de formación continua que fomenten la sensibilización sobre la importancia de la prevención, así como de establecer procedimientos de respuesta ante situaciones de emergencia, minimizando así el potencial impacto de cualquier eventualidad.
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
