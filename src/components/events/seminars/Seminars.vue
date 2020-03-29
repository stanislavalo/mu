<template>
  <v-container fluid>
    <v-layout row wrap class="mb-2 mx-1">
    <v-flex xs12 >
      <span class="headline blue--text text--darken-4 ">{{ $t("events.seminars") }}</span>
      </v-flex>
    </v-layout>
    <v-layout  row wrap class="my-0 mx-1">
        <v-flex v-for="(item, index) in seminars" :key=index xs12 sm12 md6 lg6 xl6 class="my-1" >
          <app-seminar-info :item="item"></app-seminar-info>
      </v-flex>
    </v-layout>
  </v-container> 
</template>
<script>
import seminars from '../../../data/events/seminars/seminars.js';
import seminarInfo from './SeminarInfo.vue';
export default {
  data(){
    return {
      seminars:seminars,
    }
  },
  components:{
    AppSeminarInfo:seminarInfo,
  }
}
</script>