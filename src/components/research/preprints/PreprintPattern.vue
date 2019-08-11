<template>
    <v-layout row class=" ml-1 ">
      <v-flex xs12 xl8>
        <a class="indigo--text text--darken-2 font-weight-bold" :href="preprint.url_preprint">{{preprint.registrat_num}}
          <img src='../../../assets/research/acrobat_icon.png' class="ml-2 mb-1"></a>
          <br><span class="caption">Registered: {{preprint.date_preprint}}</span>
      </v-flex>
      <v-flex xs10>
        <app-production-list-grants v-if="preprint.grants" :grants="preprint.grants"></app-production-list-grants>
      </v-flex>
    </v-layout>
</template>
<script>
import productionListGrants from '../ProductionListGrants.vue';
export default {
  props:['preprint'],
  components:{
    AppProductionListGrants:productionListGrants,
  }
}
</script>




