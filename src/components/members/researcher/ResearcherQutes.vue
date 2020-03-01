<template> 
  <v-layout class="layout">
    <blockquote class="ma-0 pa-0">
      <p class="body-2 font-weight-light font-italic white--text mt-2">
        {{quotes.text}}                                     
      </p>
      <p  class="author body-2 font-weight-light font-italic white--text my-0 py-0">
        {{quotes.author}}
      </p>
    </blockquote>
  </v-layout>
</template>
<script>
export default {
  data(){
    return {
      quotesR:false,
    };
  },
  props:{
    quotes:Object
  },
  created(){
    this.quotesR = Math.random() >= 0.5;
  }
}
</script>
<style  scoped>
  .author{
    text-align: right;
  }
</style>
