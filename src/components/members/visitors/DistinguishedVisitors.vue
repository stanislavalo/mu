<template>
<div>
  <v-layout>
    <v-flex  xs12  xl12 xs offset-sm3-xl0>
      <div class="mx-0 mt-2 pa-1 headline blue--text text--darken-4 ">{{ $t("visitors.distinguished") }}</div>
    </v-flex>
  </v-layout>
  <v-layout wrap row  xs12  xl12 class="mt-0 mb-1 mx-1"> 
    <v-flex  xs12  xl12 >
      <div class="pa-1 justify">
        The Eduard Čech Distinguished Visitor Programme has been established with the aim to significantly enhance the creative environment in the Institute by bring here highly distinguished mathematicians for prolonged periods. The visitors are expected to deliver a series of at least three lectures for the mathematical community and to essentially develop scientific collaboration with the mathematicians in the Institute.
      </div>
    </v-flex> 
  </v-layout>
  <v-layout  row wrap class="mb-1 mx-1">
    <v-flex v-for="(visitor,index) in visitors" :key=index xs12  class="my-2" >
      <app-visitor-list :visitor="visitor"></app-visitor-list>
    </v-flex>
  </v-layout>
  <v-layout wrap row  xs12  xl12 class="mt-2 mb-1 mx-1"> 
    <v-flex  xs12>
      <div class="pa-1 body-1">
        <img src="../../../assets/members/ecech.png"  class="hidden-sm-and-down">
        <a href="https://intranet.math.cas.cz/images/6/61/4-2016_ECech_visitor_en.pdf" class="black--text">
          Rules of Eduard Čech Distinguished Visitor Programme &nbsp;
          <img src="../../../assets/research/acrobat_icon.png" > 
        </a>
        ,&nbsp;
         <a href="https://intranet.math.cas.cz/images/3/3f/4-2016_ECech_visitor_cz.pdf" class="black--text">
         česká verze 
         &nbsp;
          <img src="../../../assets/research/acrobat_icon.png" > 
         </a>  
      </div>
    </v-flex>
  </v-layout>
</div>
</template>
<script>

import visitors from '../../../data/people/visitorsCech.js';
import visitorList from './VisitorList.vue';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      visitors:visitors,
    }
  },
  components:{
    AppVisitorList:visitorList,
  }   
}
</script>
<style scoped>
  .perso{
   color:#0000cd; 
  }
  .justify{
   text-align: justify !important; 
  }
</style>