<template>
  <div class="main">
    <Header />
    <div class="wrapper">
      <router-view/>
    </div>
    <Icons />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Icons from '@/components/Icons'

export default {
  name: 'HomeView',
  components:{
    Header,
    Icons
  }
}
</script>

<style lang="scss">
  .wrapper{
    max-width: 1380px;
    width: 100%;
    margin: auto;
    padding: 0 20px;
  }
</style>
