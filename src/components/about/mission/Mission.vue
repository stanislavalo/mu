<template>
  <v-layout wrap row :class="[smAndDown ? 'ml-1': 'ml-2','mr-1']">
    <v-flex  xs12 >
      <div class=" mt-2  headline blue--text text--darken-4 ">{{ $t("about.mission") }}</div>
    </v-flex>
    <v-flex  xs12 >
      <div class="title mt-2 mb-2" v-html="mission.title_page[language]"></div>
      <p class=" justify body-2" v-html="mission.text[language]"></p>
    </v-flex> 
    <v-flex  xs12>
      <div class="title mt-3 mb-1" >{{$t("about.departments")}}</div>
    </v-flex>
    <v-flex xs12 v-for="(department, index) in departments" :key="index">
      <router-link :to="{name:'detail',params:{id:department.id}}" tag="a">
      <div class="subheading mt-2 font-weight-bold blue--text text--darken-4">
        {{department.name[language]}} {{department.sigle}} 
        </div>
      </router-link>
      <p class="justify body-2" v-html="department.description[language]"></p>
    </v-flex>  
  </v-layout>
</template>
<script>

import mission from './../../../data/about/mission.js';
import departments from '../../../data/departments.js';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      mission:mission,
      departments:departments,
    }
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
        smAndDown:'smAndDown',
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