<template>
  <div class="container">
    <div class="container__banner"></div>
    <div class="container__cards" >
      <div class="container__cards-item"
           v-for="card in data"
           :key="card.id"
           :class="card.setFav ? 'on' : 'off'"
      >
        <div class="container__cards-item-image" :style="{backgroundImage: `url(${card.image })`}" ></div>
        <div class="container__cards-item-title">
          {{card.name}}
        </div>
        <div class="container__cards-item-price">
          {{card.price}}₽
        </div>
        <div class="container__cards-buttons">
          <button class="container__cards-button button__add">
            <i class="bi bi-bag-plus"></i>
          </button>

          <button @click="card.show = !card.show" class="container__cards-button button__like-false">
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
      // items: [],
      setFav: false,
    }
  },
  methods:{

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
  height: 350px;
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
  height: 200px;
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
.button__add, .button__like-false{
  width: 70px;
  font-size: 25px;
  cursor: pointer;
  height: 70px;
  border: 1px solid;
  border-radius: 10px;
  background-color: transparent;
}
/*.button__like-true{*/
/*  display: none;*/
/*}*/
.container__cards-item-price{
  font-size: 30px;
}
</style>