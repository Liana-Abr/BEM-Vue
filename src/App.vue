<template>
 <page-header></page-header>
  <main-page></main-page>
</template>

<script>

  import Main from "@/components/Main";
  import Header from "@/components/Header";

  export default {
    name: 'App',
    components: {
      "page-header": Header,
      "main-page": Main,

    },
    data(){
      return {
      }
    },
  }
</script>
<style>
body{
  font-family: 'Montserrat', sans-serif;
}



</style>
