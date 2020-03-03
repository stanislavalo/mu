<template>
<div>
  <app-grants-production v-if="nb_grants"></app-grants-production>
  <app-publications-production v-if="nb_publications"></app-publications-production>
  
</div>
</template>
<script>
import grantsProduction from './GrantsProduction.vue';
import publicationsProduction from './PublicationsProduction.vue';
import {mapGetters}from 'vuex';

export default {
  components:{
    'AppGrantsProduction':grantsProduction,
    'AppPublicationsProduction':publicationsProduction,
  },
  computed:{
    ...mapGetters('researcher', {
    nb_grants:'nb_grants',
    nb_publications:'nb_publications',
   }),
  }
}
</script>
