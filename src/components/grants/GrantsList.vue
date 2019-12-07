<template>
<v-container fluid >
  <v-layout>
    <v-flex  xs12 md3 xl2 lg2 >
      <div class="ma-0 pa-1 headline blue--text text--darken-4 ">{{ $t("grants."+title) }}</div>
    </v-flex>
    <!-- <v-flex class="hidden-sm-and-down" md3 xl2 lg2> -->
      <app-select-year></app-select-year>
    <!-- </v-flex> -->
  </v-layout>
  <v-layout class="mx-0 px-0 my-2">
    <v-flex xs12 class=" px-0 mx-0"> 
      <v-card width="100%" flat class=" px-1 mx-0 py-0" v-for="(item, index) in grantsList" :key="index" >
        <app-grant-title :showTitle=true :item="item" ></app-grant-title>
        <app-grant-description :showIcon=false :seeDescription="seeDescription" :description="item.description" ></app-grant-description> 
        <v-divider light></v-divider>
      </v-card>
    </v-flex>
  </v-layout> 
</v-container> 
</template>
<script>
import {mapGetters} from 'vuex';
// import data
import grants from '../../data/grants/grantsList';
// import components
import grantTitle from './GrantTitle.vue';
import grantDescription from './GrantDescription.vue';
import selectYear from './SelectYear.vue';
export default {
  data(){
    return {
      type: this.$route.params.type,
      seeDescription:false,
      id_grantActive:null,
      title:'1',
    };
  },
  components:{
    appGrantDescription:grantDescription,
    appGrantTitle:grantTitle,
    appSelectYear:selectYear,
  },
  created: function() {
    this.seeDescription = !this.$vuetify.breakpoint.xsOnly;
    var grantsData = [];
    var typeGrant = this.type;
    grants.forEach(function(element) {
      if(element.type_grant == typeGrant){
         grantsData.push(element);
      }
    });
    this.title =typeGrant.toString();
    this.grantsList = grantsData;
  },
  computed: {
    ...mapGetters({
        language:'language',
    })
  },
};


</script>
<style scoped>
.col-cen{
    float: none;
    margin: 0 auto;
}
.pointer{cursor: pointer;}
</style>