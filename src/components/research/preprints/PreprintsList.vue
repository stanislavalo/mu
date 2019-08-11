<template>
  <v-flex xs12 lg12 xl12>
    <v-card   v-for="preprint in list_preprints" :key="preprint.id"  :flat="!mdAndDown">
      
      <app-preprint-pattern :preprint="preprint" class="hidden-md-and-up xs12"></app-preprint-pattern>
      <app-preprint-content class="hidden-md-and-up pl-2 xs12" :preprint="preprint" 
        :listTypePublication="listTypePublication" >
      </app-preprint-content> 
      <v-layout class="hidden-sm-and-down">
        <v-flex lg3 xl2 class="ml-3 mr-3" >
          <app-preprint-pattern :preprint="preprint" ></app-preprint-pattern>
        </v-flex>
        <v-flex lg10 xl9>
          <app-preprint-content :preprint="preprint" :listTypePublication="listTypePublication"></app-preprint-content>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </v-flex> 
</template>
<script>

import preprints from '../../../data/research/preprints.js';
import preprintPattern from './PreprintPattern.vue';
import preprintContent from './PreprintContent.vue';
import {mapGetters} from 'vuex';
export default {
  props:['typePublication'],
  data(){
    return {
      list_preprints:preprints,
      publication:null,
      listTypePublication:[]
    }
  },
  components:{
    AppPreprintPattern:preprintPattern,
    AppPreprintContent:preprintContent,
  },
  created(){ 
      this.typePublication.forEach(element => {
      this.listTypePublication[element.id] = element.name; 
    });
  },
  computed: {
    ...mapGetters({
      id_member:'id_member',
      department:'department',
      type:'type',
      year:'year' 
    }),
    // TODO search preprints dans BD , use filter id_member,departement,type,year
    // getPublications
  }
}
</script>


