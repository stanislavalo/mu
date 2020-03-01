<template>
<div>
  <app-grants-production></app-grants-production>
  <app-publications-production></app-publications-production>
  
</div>
</template>
<script>
import grantsProduction from './GrantsProduction.vue';
import publicationsProduction from './PublicationsProduction.vue';
export default {
  components:{
    'AppGrantsProduction':grantsProduction,
    'AppPublicationsProduction':publicationsProduction,
  }
}
</script>
