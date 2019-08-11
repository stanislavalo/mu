<template>
  <div id="search" class="grey lighten-4">
    <v-flex  xs12 xl12 class="mt-2 mb-2">
      <v-card >
        <v-card-title >
          <v-flex  xl2>
            <span class=" headline blue--text text--darken-4 ">
              {{ $t("production.preprints") }}
            </span>
          </v-flex>
          <v-flex xl8 lg9>
            <!-- form select preprints -->
            <app-select :typeProduction="typeProduction" :typePublication="typePublication" :showType="showType"></app-select>
          </v-flex>
          <v-spacer></v-spacer>
        </v-card-title>
      </v-card>
    </v-flex>
    <app-preprints-list :typePublication="typePublication" ></app-preprints-list>
  </div>
</template>
<script>
import select from '../Select.vue';
import preprintsList from './PreprintsList.vue';
import typePublication from '../../../data/research/typePublication';

export default {
  data(){
    return{
      typePublication: typePublication,
      typeProduction:'preprints',
      /**
      hide type publication in form for preprints 
      */
     showType:false 
    }
  },
  components:{
    appSelect:select,
    appPreprintsList:preprintsList,
  },
}
</script>
<style>
#search{
  width: 100%; 
  margin: auto;
}
</style>
