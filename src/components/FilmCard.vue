<template>
  <div class="film">
    <div class="film__data">
      <div class="film__image">
        <img :src="data.image" alt="logo">
      </div>
      <div>
        <div class="film__genre">
          <span>{{ data.age }}</span>
          {{ data.genre }}
        </div>
        <div class="film__name">
          {{ data.name }}
        </div>
        <div class="film__publisher">
          {{ data.publisher }}
        </div>
        <div class="film__duration">
          {{ data.duration }}
        </div>
      </div>
    </div>
    <div class="film__shedules">
      <template v-for="shedule in data.shedules" :key="shedule.id">
        <button type="button" class="shedule" @click="booking(data.id)">
          <div class="shedule__snippet">
            {{ shedule.time }}
          </div>
          <div class="shedule__price">
            {{ shedule.price }}
          </div>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: "FilmCard",
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup() {
    const router = useRouter()

    const booking = (id) => {
      router.push({
        name: 'Booking',
        params: { id }
      })
    }

    return { booking }
  }
}
</script>

<style lang="scss" scoped>
  .film{
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #8c8395;
    padding: 10px 0;
    &__image{
      width: 120px;
      height: 180px;
      margin-right: 15px;
    }
    &__data{
      display: flex;
      margin-right: 20px;
      max-width: 400px;
      width: 100%;
      img{
        width: 120px;
        height: 180px;
        object-fit: cover;
        margin-right: 15px;
      }
    }
    &__genre{
      color: #b1005c;
      font-size: 14px;
      span{
        font-size: 12px;
        line-height: 18px;
        border: 1px solid #545154;
        padding: 0 4px;
        border-radius: 5px;
        font-weight: 300;
      }
    }
    &__name{
      font-size: 20px;
      margin-top: 10px;
      font-weight: 500;
      word-break: break-all;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    &__publisher{
      font-size: 14px;
      color: #b1005c;
      margin-top: 40px;
    }
    &__duration{
      font-size: 18px;
      font-weight: 300;
      margin-top: 10px;
    }
    &__shedules{
      display: flex;
      gap: 15px;
    }
  }
  .shedule{
    border: 0;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    &__snippet{
      width: 82px;
      border: 1px solid #8c8395;
      border-radius: 5px;
      font-size: 18px;
      text-align: center;
      line-height: 24px;
      padding: 7px 0;
      margin-bottom: 8px;
      font-weight: 300;
      transition: background-color 0.3s;
      &:hover{
        background-color: #c6cad8;
        color: #000;
      }
    }
  }
</style>
