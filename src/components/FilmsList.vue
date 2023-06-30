<template>
  <div class="films">
    <FilmCard v-for="film in films" :key="film.id" :data="film" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import FilmCard from '@/components/FilmCard'

export default {
  name: "FilmsList",
  components: {
    FilmCard
  },
  setup() {
    const films = ref([])

    onMounted(() => {
      axios.get('/films.json').then((r) => {
        films.value = r.data
      })
    })

    return { films }
  }
}
</script>

<style scoped>

</style>
