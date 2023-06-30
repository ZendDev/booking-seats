<template>
  <div class="booking">
    <h1 class="booking__title">Расписание на сегодня</h1>
    <FilmsList />
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList'

export default {
  name: 'HomeView',
  components: {
    FilmsList
  }
}
</script>

<style lang="scss" scoped>
  .booking{
    &__title{
      font-size: 24px;
      font-weight: 500;
      margin: 30px 0;
    }
  }
</style>
