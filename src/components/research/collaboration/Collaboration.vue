<template>
  <v-layout row wrap class="mx-0 px-0 mt-1">
    <v-flex xs12 class="px-0 mx-0">  
      <div class="mx-2 mt-2 pa-1 headline blue--text text--darken-4 ">{{ $t("research.collaboration") }}</div>
    </v-flex>
    <v-flex xs12 class="px-0 mx-0">    
      <v-card class=" px-0 mx-0 my-3"   v-for="(collaboration,index) in collaborations"  :key="index" >
        <v-card-title class="my-0 py-1" >
          <div class="my-0 py-0">
            <a :href="collaboration.url" target="_blanc">
              <span v-if="language==0" class="indigo--text title" v-html="collaboration.nom_lien"></span>
              <span v-else class="indigo--text title" v-html="collaboration.nom_lien_cz"></span>
              <img v-if="collaboration.url_logo" :src="collaboration.url_logo" 
                width="70px" class="ml-2" height="70px">
            </a>
            <p class="textjustify" v-html="collaboration.description"></p>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
// import data
import collaborations from '../../../data/research/collaborations.js';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
     collaborations:collaborations,
    }
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
    })
  }
}
</script>
<style scoped>
.textjustify{
  text-align: justify 
}
</style>


