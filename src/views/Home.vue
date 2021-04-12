<template>
  <div class="home">
    <h1>Home</h1>
    <MoviesSection :movies="movies" />

    <h1>Home</h1>
    <MoviesSection :movies="movies" />

    <h1>Home</h1>
    <MoviesSection :movies="movies" />
  </div>
</template>

<script>
import MoviesSection from '../components/MoviesSection'

export default {
  name: 'Home',

  components: {
    MoviesSection
  },

  data () {
    return {
      title: '1231',
      age: 123,
      movies: [
        { id: 1, banner: 'https://c7nema.net/wp-content/uploads/2019/04/naom_5cd55a3f25614.jpg' },
        { id: 2, banner: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/05/cropped-homem-de-ferro-iron-man-9.jpeg' },
        { id: 3, banner: 'https://aventurasnahistoria.uol.com.br/media/_versions/curiosidades/a_lagoa_azul_capa_ilha_fiji_widelg.jpg' },

        { id: 4, banner: 'https://c7nema.net/wp-content/uploads/2019/04/naom_5cd55a3f25614.jpg' },
        { id: 5, banner: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/05/cropped-homem-de-ferro-iron-man-9.jpeg' },
        { id: 6, banner: 'https://aventurasnahistoria.uol.com.br/media/_versions/curiosidades/a_lagoa_azul_capa_ilha_fiji_widelg.jpg' },

        { id: 7, banner: 'https://c7nema.net/wp-content/uploads/2019/04/naom_5cd55a3f25614.jpg' },
        { id: 8, banner: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/05/cropped-homem-de-ferro-iron-man-9.jpeg' },
        { id: 9, banner: 'https://aventurasnahistoria.uol.com.br/media/_versions/curiosidades/a_lagoa_azul_capa_ilha_fiji_widelg.jpg' }
      ]
    }
  }
}
</script>
