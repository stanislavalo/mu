<template>
  <div>
    <v-layout>
      <v-flex  xs12 class="mt-2 ml-1">
        <span class="headline blue--text text--darken-4 ">{{ $t("visitors.visitors") }}</span>
        <div class="ml-1 mt-1 px-0">
          <app-selected-year-stay></app-selected-year-stay>
        </div>
      </v-flex>
    </v-layout>
    <v-layout  row wrap class="mb-1 mx-1">
      <v-flex v-for="(visitor,index) in visitors" :key="index" xs12  class="my-2" >
        <app-visitor-stay :visitor="visitor" :key=index></app-visitor-stay>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import visitorStay from './VisitorStay.vue';
import selectedYearStay from './SelectYearStay.vue';

import {mapGetters} from 'vuex';
import SelectYearStayVue from './SelectYearStay.vue';

export default {
  components:{
     AppVisitorStay:visitorStay,
     AppSelectedYearStay:selectedYearStay,
  },
  computed:{
    ...mapGetters('visitors',{
      visitors:'visitors',
    })
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