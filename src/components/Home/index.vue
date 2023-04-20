<template>
<!--
.container
  .container__search
    .container__search-text
    .container__search-input
  .container__cards
    .container__cards__item
    .container__cards__item__image
    .container__cards__item__title
    .container__cards__item__price
    .container__cards__buttons
      .container__cards__button__button-add
      .container__cards__button__button-like
-->
  <div class="container">
    <div class="container__search">
      <p class="container__search-text">Поиск</p>
      <input class="container__search-input" v-model="searchShoes" type="Text" placeholder="Введите название">
    </div>

    <div class="container__cards" >
      <div class="container__cards__item"
           v-for="(card, index) in filteredShoes"
           :key="index"
      >
        <div class="container__cards__item-image"
             :style="{backgroundImage: `url(${card.image })`}"
        ></div>
        <div class="container__cards__item-title">
          {{card.name}}
        </div>
        <div class="container__cards__item-price">
          {{card.price}}₽
        </div>
        <div class="container__cards-buttons">
          <button class="container__cards__button__button-add">
            <i class="bi bi-bag-plus"></i>
          </button>

          <button @click="card.show = !card.show" class="container__cards-button-button-like">
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
.container__cards__item{
  width: 350px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.container__cards__item-image{
  width: 250px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.container__cards__item-title{
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
.container__cards__item-price{
  font-size: 30px;
}
.container__search{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0 100px 0;
}
.container__search-text{
  font-size: 25px;
  font-weight: bold;
}
.container__search-input{
  width: 400px;
  height: 50px;
  outline: none;
  font-size: 25px;
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
}
</style>