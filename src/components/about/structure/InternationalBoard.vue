<template>
   <v-flex xs12 class="subheading black--text font-weight-regular mb-2">
    <div class="justify">
      <p>
        The International Advisory Board (IAB) of the Institute of Mathematics CAS is appointed by the Director of the Institute following the proposal of the Board of the Institute.
The Institute follows the idea that only a general and complex development of mathematics, not the cultivation of just a single mathematical branch, can guarantee a full and general progress in mathematical cognition.
      </p>
      <p>
        Members of the IAB may be asked for their opinion on all significant scientific and research issues that occur in the Institute and the Czech Academy of Sciences, such as the future scientific orientation of the Institute and its possible changes, recruiting new, especially young researches, or organization of international scientific meetings. The expert opinion of members of the IAB shall serve as an advice for conclusions of the Board of the Institute and for Director's decisions.
The IAB need not meet physically. The membership in the IAB is a position of honour. All members of the IAB are invited to visit the Institute.
      </p>
    </div>
    <div>
      <p class="mt-2 mb-1 orange--text text--darken-4">{{$t("structure.members")}}</p>
      <p v-for="(item, index) in bordData" :key="index"  class="ma-0 pa-0">
        {{item.first_name}}
        <span class="font-weight-bold">{{item.last_name}}</span>
      </p>
    </div>
    <div class="mt-1">
      <a href="https://intranet.math.cas.cz/iab/index.html" target="_blanc" 
        class="purple--text text--darken-4 activities">
      Activities of the International Advisory Board</a>
    </div>
      <v-divider></v-divider> 
   </v-flex>
  
</template>
<script>
import bordData from '../../../data/about/structure/bordInternational.js'
import {mapGetters} from 'vuex';
export default {
  data(){
    return {
      bordData:bordData,
    };
  },
  computed:{
    ...mapGetters('header',{
      smAndDown:'smAndDown'
    })
  }
}
</script>
<style scoped>
  .activities{
   text-decoration: underline;
 }
 
  .justify{
   text-align: justify !important; 
  }
</style>