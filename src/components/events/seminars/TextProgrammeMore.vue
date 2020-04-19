<template>
  <vue-read-more-smooth text="More!" text-less="Less!">
    <div  v-html="textMore" class="justify body-2 font-weight-regular ml-0 mt-1 mr-2 black--text">
    </div> 
  </vue-read-more-smooth>   
</template>
<script>
import readMoreSmooth from "vue-read-more-smooth";
export default {
  props:['textMore'],
   components: { 
     VueReadMoreSmooth:readMoreSmooth
     },
}
</script>
<style scoped>
.justify {
  text-align: justify;
}
</style>
