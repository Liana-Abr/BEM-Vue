<template>
  <header class="header">
    <p class="header__logo">Shop</p>
    <nav class="header__nav">
      <router-link class="header__nav-item-cart-btn" to="#">
        <i class="bi bi-bag"></i>
      </router-link>
    </nav>
<!--    <p class="header__links">Главная</p>-->
  </header>
</template>
<script>
export default {
  name: "page-header"
}
</script>
<style scoped>
.header{
  display: flex;
  font-size: 25px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid grey;
}
.header__logo{
  color: #90c090;
  font-size: 30px;
  font-weight: bold;
}
.header__nav{
  display: flex;
  gap: 50px;
}
.header__nav a{
  color: black;
  text-decoration: none;
}
.header__nav a:hover{
  color: #90c090;
}
.header__nav-item-cart-btn{
  background-color: #90c090;
  border-radius: 5px;
  padding: 10px;

}
.header__nav-item-cart-btn i{
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

</style>