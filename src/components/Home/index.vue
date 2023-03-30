<template>
  <div class="container">
    <h1>Hello</h1>
  </div>
</template>
<script>
export default {
  name: "home-page",
  data () {
    return {
      posts: [
        {id: 1, title: "UX/UI Design", subtitle: "Дизайн и проектирование пользовательского интерфейса"},
        {id: 2, title: "Mobile", subtitle: "Мобильный дизайн"},
        {id: 3, title: "Print", subtitle: "Принт"},
        {id: 4, title: "Typography", subtitle: "Искусство оформления печатного текста"}
      ]
    }
  },
  components:{
    "people-categories": Categories
  }
}
</script>

<style scoped>
.categories{
  display: inline-block;
  flex-direction: row;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}
.banner {
  position: relative;
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.questions{
  position: relative;
  justify-content: center;
  align-items: center;
  left: 15%;
  height: 40vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.questions>div{
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: black;
  width: 300px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
}

h2{
  display: flex;
  justify-content: center;
  margin: 100px 0 10px 0;
}

.slider {
  position: relative;
  width: 90%;
  overflow: hidden;
}
.images {
  display: flex;
  width: 100%;
}
.images img {
  height: 500px;
  width: 100%;
  transition: all 0.15s ease;
  background-color: #eef1f0;
}
.images input {
  display: none;
}
.cubes {
  display: flex;
  justify-content: center;
  margin: 5px;
}
.cubes label {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: solid lightgray 3px;
  cursor: pointer;
  transition: all 0.15s ease;
  margin: 5px;
}
.cubes label:hover {background: #e3fe52;}
#img1:checked ~ .m1 {
  margin-left: 0;
}
#img2:checked ~ .m2 {
  margin-left: -70%;
}
#img3:checked ~ .m3 {
  margin-left: -170%;
}

</style>