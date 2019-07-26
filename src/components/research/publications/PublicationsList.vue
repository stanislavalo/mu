<template>
  <v-flex xs12 xl12>
    <v-card   v-for="publication in list_publications" :key="publication.id"  :flat="!mdAndDown">
      <app-publication-pattern :publication="publication" :listTypePublication="listTypePublication"
        :class="['hidden-md-and-up', 'productionsm', 'type'+publication.type ]"></app-publication-pattern>
      <app-publication-content :publication="publication" 
        :class="['hidden-md-and-up', 'productionsm','pl-2','type'+publication.type]"></app-publication-content>
      <v-layout class="hidden-sm-and-down">
        <v-flex  xl1 class="ml-3 mr-3" >
          <app-publication-pattern :publication="publication" :listTypePublication="listTypePublication"
            :class="['production','type'+publication.type ]"></app-publication-pattern>
        </v-flex>
        <v-flex  xl9>
          <app-publication-content :publication="publication" :class="'type'+publication.type"></app-publication-content>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>
  </v-flex> 
</template>
<script>
import publications from '../../../data/research/publications';
import publicationPattern from './PublicationPattern.vue';
import publicationContent from './PublicationContent.vue';
import {mapGetters} from 'vuex';
export default {
  props:['typePublication'],
  data(){
    return {
      list_publications:publications,
      listTypePublication:[],
    }
  },
  components:{
    AppPublicationPattern:publicationPattern,
    AppPublicationContent:publicationContent,
  },
  created(){ 
      this.typePublication.forEach(element => {
      this.listTypePublication[element.id] = element.name; 
    });
  },
  computed: {
    ...mapGetters({
      id_member:'id_member',
      department:'department',
      type:'type',
      year:'year' 
    }),
  }
}
</script>
<style  scoped>
.production{
  border-left-width: 1em;
  border-left-style: solid;
}
.productionsm{
  border-left-width:0.3em;
  border-left-style: solid;
}
.type1{
  border-left-color:#5C6BC0
}
.type2{
  border-left-color: rgb(247, 85, 85);
}
.type3{
  border-left-color: green
}
.type4{
  border-left-color: yellow
}
.type5{
  border-left-color: rgb(146, 245, 245)
}
</style>


