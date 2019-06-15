<template>
  <v-container id="app" :fluid = "fluidContenair" >
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

