<template>
  <div class="seats">
    <div class="info">
      <h1>{{ data?.name }} {{ data?.age }}</h1>
      <p>Продолжительность: {{ data?.duration }}</p>
      <p>Сеанс в {{ data?.time }}</p>
    </div>
    <div class="seats__list">
      <div v-for="seat in data?.seats" :key="seat.id" class="seats__item">
        <Tooltip :title="seat.lock ? `Место занято` : `Ряд ${seat.row}, Место: ${seat.id}, Цена: ${seat.price}`" placement="bottom">
          <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              :class="{lock: seat.lock, booked: bookingList[seat.id]}"
              @click="toggleSeat(seat)"
          >
            <use href="#seat" />
          </svg>
        </Tooltip>
      </div>
    </div>
    <div v-if="Object.keys(bookingList).length" class="booking-list">
      <div class="booking-list__header">
        Ваш заказ
      </div>
      <ul class="order">
        <li v-for="item in bookingList" :key="item.id" class="order__item">
          <span>Ряд: {{ item.row }}, Место: {{ item.id }}</span>
          <span>{{ item.price }} руб.</span>
        </li>
      </ul>
      <button class="button" type="button" @click="order">Заказать</button>
    </div>
    <Modal v-if="successModal">
      <template v-slot:header>
        Спасибо за заказ!
      </template>
      <template v-slot:body>
        Ваш заказ оформлен. Приятного просмотра!
      </template>
      <template v-slot:footer>
        <button class="button" type="button" @click="successModal = false">
          Закрыть
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import { onMounted, ref} from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { Tooltip } from '@programic/vue3-tooltip'
import Modal from '@/components/Modal'

export default {
  name: "Booking",
  components: {
    Tooltip,
    Modal
  },
  setup(){
    const route = useRoute()
    const data = ref()
    const bookingList = ref({})
    const successModal = ref(false)

    onMounted(() => {
      axios.get(`/${route.params.id}.json`).then((r) => {
        data.value = r.data
      })
    })

    const toggleSeat = (payload) => {
      const isBooked = Object.prototype.hasOwnProperty.call(bookingList.value, payload.id)
      if (!payload.lock && !isBooked) {
        bookingList.value[payload.id] = payload
      } else {
        delete bookingList.value[payload.id]
      }
    }

    const order = () => {
      const pointsID = Object.keys(bookingList.value).map((key) => key)
      // Так как запрос гарантированно вернет 404, вместо then использую finally
      axios.post('/order', {
        user_id: 1,
        pointsID,
        time: data.value.time
      }).finally(() => {
        successModal.value = true
      })
    }


    return { data, toggleSeat, bookingList, order, successModal }
  }
}
</script>

<style lang="scss" scoped>
  .seats{
    &__list{
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 7px;
      max-width: 550px;
      margin: auto;
    }
    &__item{
      svg{
        fill: #fff;
        stroke: #000;
        width: 40px;
        height: 40px;
        transition: 0.3s;
        &.lock{
          fill: gray;
          stroke: #000;
        }
        &.booked{
          fill: royalblue;
          stroke: blue;
        }
        &:hover{
          fill: green;
          stroke: #000;
          cursor: pointer;
        }
      }
    }
  }
  .info{
    margin-bottom: 50px;
  }
  h1{
    font-size: 24px;
    font-weight: 500;
  }
  .booking-list{
    max-width: 550px;
    width: 100%;
    margin: auto;
    margin-top: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    &__header{
      font-weight: 500;
      font-size: 20px;
    }
  }
  .order{
    &__item{
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      &:before{
        content:'';
        position: absolute;
        width: 100%;
        height: 1px;
        border-bottom: 1px dashed #ccc;
        bottom: 2px;
      }
      span{
        position: relative;
        overflow: hidden;
        padding: 0 3px;
        background: #FFF;
        &:last-child{
          font-weight: 500;
        }
      }
    }
  }
  .button{
    width: 100%;
    height: 40px;
    background: #b1005c;
    border: 0;
    border-radius: 10px;
    font-size: 16px;
    color: #FFF;
    margin-top: 20px;
    cursor: pointer;
  }
  @media(max-width: 510px){
    .seats{
      &__item{
        svg{
          width: 25px;
          height: 25px;
        }
      }
    }
  }
</style>
