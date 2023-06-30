<template>
  <header class="header">
    <div class="header__inner">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="logo">
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
  .header{
    position: relative;
    height: 80px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.06);
    margin-bottom: 40px;
    &__inner{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }
  .logo{
    img{
      display: block;
      height: 50px;
    }
  }
</style>
