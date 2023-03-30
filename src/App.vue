<template>
  <page-header></page-header>
  <main-page></main-page>
</template>

<script>
  import Header from "@/components/header";
  import Main from "@/components/Main";

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
  min-width: 600px;
}



</style>
