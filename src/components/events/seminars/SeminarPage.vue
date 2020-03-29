<template>
  <v-layout  row wrap class="my-0 mx-1" >
    <v-flex xs12>
      <app-crumps :crumps="crumps"></app-crumps>
    </v-flex>
    <v-flex  lg1 xl1 class="hidden-md-and-down grey lighten-2">
      <app-select-year-seminars class="ml-5"></app-select-year-seminars>
    </v-flex>
    <v-spacer class="hidden-md-and-down grey lighten-2"></v-spacer>
    <v-flex xs12 sm12 md12 lg10  xl10 >
    <app-seminar-info :item="seminar" :detail="detail"></app-seminar-info>
    </v-flex>
    <v-flex xl2 md12 class="hidden-lg-and-up mx-0">
      <app-select-year-seminars></app-select-year-seminars>
    </v-flex>
  <app-programme :entity_id="seminar.entity_id"></app-programme>
  </v-layout>
</template>
<script>
import {mapGetters} from 'vuex';
import selectYearSeminars from './SelectYearSeminars.vue';
import seminarInfo from'./SeminarInfo.vue';
import programme from './Programme.vue';
import CrumpsVue from '../../sharing/Crumps.vue';


export default {
  props:['seminar'],
  data(){
    return {
      detail:true,
       crumps: [],
    }
  },
  components:{
    AppSelectYearSeminars:selectYearSeminars,
    AppSeminarInfo:seminarInfo,
    AppProgramme:programme,
     appCrumps: CrumpsVue,
  },
  created(){
    //crumbs
    this.crumps.push({
          text: "Home",
          disabled: false,
          href: 'home',
    }), 
    this.crumps.push({
          text: "Seminars",
          disabled: false,
          href: 'seminars',
    }),  
    this.crumps.push({
          text: this.seminar.field_seminar_title_value,
          disabled: true,
          href: '' 
    });
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
        smAndDown:'smAndDown'
    }),
  },
}
</script>


