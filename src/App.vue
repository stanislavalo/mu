<template>
  <v-container id="app" :fluid = "fluidContenair" class="mt-0 pt-0 ">
    <div class="row">      
      <app-header></app-header>
      <router-view class="ma-0 px-1"></router-view>
      <app-footer style="width:100%" class="ma-0 pa-0"></app-footer>
    </div> 
  </v-container > 
</template>

<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
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
    appFooter:Footer,
  },
  created(){
  }
}
</script>
<style scoped>
.container{
  min-width: 100%;
}
</style>

