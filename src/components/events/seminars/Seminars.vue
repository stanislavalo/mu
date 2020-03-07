<template>
  <v-container fluid>
    <v-layout row wrap class="mb-2 mx-1">
    <v-flex xs12 >
      <span class="headline blue--text text--darken-4 ">{{ $t("events.seminars") }}</span>
      </v-flex>
    </v-layout>
    <v-layout  row wrap class="my-0 mx-1">
        <v-flex v-for="(item, index) in seminars" :key=index xs12 sm12 md6 lg6 xl6 class="my-1" >
          <v-card tile  elevation=3 min-width=100%>
            <div class="subheading font-weight-bold ml-3 mt-1 ">
               <router-link :to="{name:'seminar',params:{id:item.entity_id}}" class="blue--text text--darken-4">
                {{item.field_seminar_title_value}}
               </router-link>
              <p class="body-2 font-weight-regular pt-1">{{item.field_usualy_date_seminar_value}}</p>
              <div  class="row body-2 font-weight-regular ml-0 mt-1 grey--text text--darken-2">{{item.field_usualy_place_seminar_value}}</div>
              <div class="row body-2 font-weight-bold ml-0 mt-1 ">{{item.field_chairmen_value}}</div>
            </div>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container> 
</template>
<script>
import {mapGetters} from 'vuex';
// import data
import seminars from '../../../data/events/seminars/seminars.js';
export default {
  data(){
    return {
      seminars:seminars,
    }
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
        smAndDown:'smAndDown'
    }),
  },
}
</script>
<style>
div.summary{
  border-bottom: 3px solid rgba(224,224,224, 0.6);
}
 
</style>
