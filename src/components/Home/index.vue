<template>
<!--
.container
  .search__container
    .search__container-text
    .search__container-input
  .container__cards
    .container__cards-item
    .container__cards-item-image
    .container__cards-item-title
    .container__cards-item-price
    .container__cards-buttons
      .container__cards-button-button__add
      .container__cards-button-button__like
-->
  <div class="container">
    <div class="search__container">
      <p class="search__container-text">Поиск</p>
      <input class="search__container-input" v-model="searchShoes" type="Text" placeholder="Введите название">
    </div>

    <div class="container__cards" >
      <div class="container__cards-item"
           v-for="(card, index) in filteredShoes"
           :key="index"
      >
        <div class="container__cards-item-image"
             :style="{backgroundImage: `url(${card.image })`}"
        ></div>
        <div class="container__cards-item-title">
          {{card.name}}
        </div>
        <div class="container__cards-item-price">
          {{card.price}}₽
        </div>
        <div class="container__cards-buttons">
          <button class="container__cards-button-button__add">
            <i class="bi bi-bag-plus"></i>
          </button>

          <button @click="card.show = !card.show" class="container__cards-button-button__like">
            <i v-show="!card.show" class="bi bi-heart"></i>
            <i v-show="card.show" class="bi bi-heart-fill"></i>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import jsonData from "../../sneakers.json"
export default {
  name: "home-page",
  data () {
    return {
      data: jsonData,
      searchShoes: ""
    }
  },
  computed:{
    filteredShoes(){
      //фильтр по индексу товаров
      return this.data.filter(card =>{
        return card.name.toUpperCase().indexOf(this.searchShoes.toUpperCase()) !== -1
      })
    }
  }
}
</script>

<style scoped>
.container__cards{
  position: relative;
  left: 4%;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4,500px);
  gap: 100px;
}
.container__cards-item{
  width: 350px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.container__cards-item-image{
  width: 250px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.container__cards-item-title{
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
}

.container__cards-buttons{
  display: flex;
  font-size: 25px;
  gap: 50px;
  margin-top: 20px;
}
.container__cards-button-button__add, .container__cards-button-button__like{
  width: 70px;
  font-size: 25px;
  cursor: pointer;
  height: 70px;
  border: 1px solid;
  border-radius: 10px;
  background-color: transparent;
}
.container__cards-button-button__like .bi-heart-fill{
  color: red;
}
.container__cards-item-price{
  font-size: 30px;
}
.search__container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0 100px 0;
}
.search__container-text{
  font-size: 25px;
  font-weight: bold;
}
.search__container-input{
  width: 400px;
  height: 50px;
  outline: none;
  font-size: 25px;
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
}
</style>