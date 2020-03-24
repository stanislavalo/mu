<template>
   <v-flex xs12 class="subheading black--text font-weight-regular">
     <v-card  v-for="(item, index) in facilitiesData" :key="index" 
      elevation="1" class="mx-0 mb-3" width="100%">
      <v-card-title> 
        <div>
          <p> 
            <span class="orange--text text--darken-4 mr-2">{{item.facility[language]}}</span>
            <br v-if="smAndDown">
          <span :class="{'title':index == 0}" class="font-weight-bold ">{{item.name}} </span>
          </p>
          <p v-if="item.title" >  {{item.title}} </p>
          <p v-if="item.address">Address: {{item.address}} </p>
          <p>
            <span v-if="item.tel">Tel. {{item.tel}} </span>
          </p>
        </div>
      </v-card-title>
     </v-card>
   </v-flex>
</template>
<script>
import facilitiesData from '../../../data/about/structure/facilities.js';
import {mapGetters} from 'vuex';
export default {
  data(){
    return {
      facilitiesData:facilitiesData
    };
  },
  computed:{
    ...mapGetters('header',{
      smAndDown:'smAndDown',
      language:'language',
    })
  }
}
</script>
<style scoped>

</style>