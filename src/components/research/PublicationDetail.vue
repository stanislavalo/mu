<template>
  <v-flex xs12 xl12>
    <v-card   v-for="i in 3" :key="i"  :flat="!mdAndDown">
      <app-publication-pattern class="hidden-md-and-up productionsm article"></app-publication-pattern>
      <app-publication-content class="hidden-md-and-up productionsm article pl-2"></app-publication-content>
      <v-layout class="hidden-sm-and-down">
        <v-flex  xl1 class="ml-3 mr-3" >
          <app-publication-pattern class="production article"></app-publication-pattern>
        </v-flex>
        <v-flex  xl9>
          <app-publication-content></app-publication-content>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </v-flex> 
</template>
<script>
import publicationPattern from './publicationPattern.vue';
import publicationContent from './publicationContent.vue';
import {mapGetters} from 'vuex';
export default {
  components:{
    AppPublicationPattern:publicationPattern,
    AppPublicationContent:publicationContent,
  },
  computed: {
    ...mapGetters({
        language:'language',
        mdAndDown: 'mdAndDown'
    })
  }
}
</script>

<style  scoped>
.production{
  border-left-width: 1em;
}
.productionsm{
  border-left-width:0.3em

}
.article {
  border-left-style: solid;
  border-left-color:blue
}
</style>


