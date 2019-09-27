<template>
  <v-container id="app" :fluid = "fluidContenair" class="mt-0 pt-0">
    <div class="row">      
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </v-container> 
</template>

<script>
import Header from './components/header/Header.vue';
export default {
  data() {
    return{
        fluidContenair:true
    }
  },
  mounted () {
    this.fluidContenair = this.$vuetify.breakpoint.lgAndDown;
  },
  components:{
    appHeader:Header,
  },
  created(){
  }
}
</script>
<style scoped>
/* @media (min-width: 1400px) {
  .container{
      width: 1600px;
  }
} */
/* @media only screen and (min-width:1264px) and (max-width:1903px) {
 .container{
      width: 1900px;
  }
} */
</style>

