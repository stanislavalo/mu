<template>
  <v-expansion-panel focusable >
    <v-expansion-panel-content class="mp-0">
      <template v-slot:header v-if="xsOnly"  >
        <div>{{ $t("production.grants")}} </div>
      </template>
      <template v-slot:header v-else>
        {{ $t("production.grants")}}
      </template>
      <v-btn outline  color="indigo" :class="{active:isActive, noactive:!isActive}" @click="getRunningGrants" >Running</v-btn>
      <v-btn outline  color="indigo" :class="{active:!isActive, noactive:isActive}" @click="getPastGrants">Past</v-btn>
      <v-card>
        <v-card-text class="grey lighten-3" key="running">
          <p > 
            <app-grants-list  :showTitlePage="false" :openDescription="false"></app-grants-list>
          </p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import grantsList from '../../grants/GrantsList.vue';

export default {
  props:['id','xsOnly'],
  data(){
    return {
      //shaw:false,
      isActive:true,
      type:1
    };
  },
  components:{
    'AppGrantsList':grantsList,
  },
  methods:{
    getRunningGrants(){
      this.isActive=true;
      this.type = 1;
      this.$store.dispatch('grants/setTypeGrant',this.type);
      this.$store.dispatch('grants/initGrants');
    },
    getPastGrants(){
      this.isActive = false;
      this.type = 2;
      var yyyy = new Date().getFullYear()-2 ;
      this.$store.dispatch('grants/setTypeGrant',this.type);
      this.$store.dispatch('grants/setGrantsYear',2018) ;
    }
  }
}
</script>
<style  scoped>
.active {
    background-color: #C5CAE9 !important;
}
.noactive {
    background-color: #FFFFFF !important;
}
</style>
