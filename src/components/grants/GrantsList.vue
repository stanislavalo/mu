<template>
<v-container fluid >
  <v-layout row wrap>
    <v-flex  xs12  ml-3 px-0>
      <div class="ma-0 pa-0 headline blue--text text--darken-4 ">{{ $t("grants."+title) }} 
      </div>
    </v-flex>
    <v-flex v-if="type==2" xs12 lg5 ml-3 px-0 >  
      <app-select-year></app-select-year>
    </v-flex> 
  </v-layout>
  <v-layout class="mx-0 px-0 my-2">
    <v-flex xs12 class=" px-0 mx-0"> 
      <v-card width="100%" flat class=" px-1 mx-0 py-0" v-for="(item, index) in grants" :key="index" >
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
import {mapActions} from 'vuex';
import moment from 'moment';

// import components
import grantTitle from './GrantTitle.vue';
import grantDescription from './GrantDescription.vue';
import selectYear from './SelectYear.vue';
export default {
  data(){
    return {
      type: this.$route.params.type, //runnig(activ=1),past(activ=0)
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
  created() {
    this.seeDescription = !this.$vuetify.breakpoint.xsOnly;
    this.title =this.type.toString();
    this.$store.dispatch('grants/setTypeGrant',this.type);
    this.$store.dispatch('grants/initGrants');
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
    }),
    ...mapGetters('grants',{
      grants:'grants',
      typeGrant:'typeGrant'
    }),
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