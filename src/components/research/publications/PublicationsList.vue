<template>
  <v-flex xs12 lg12 xl12>
    <v-card   v-for="publication in list_publications" :key="publication.id"  :flat="!mdAndDown"
       :class="[{'productionsm':mdAndDown}, {'production':!mdAndDown},'type'+publication.type ]" >                                              
      <app-publication-pattern :publication="publication" :class="['hidden-md-and-up' ]"></app-publication-pattern>
      <app-publication-content :publication="publication" :class="['hidden-md-and-up','ml-1']"></app-publication-content>
      <v-layout class="hidden-sm-and-down">
        <v-flex lg2 xl1 class="ml-3 mr-3" >
          <app-publication-pattern :publication="publication"></app-publication-pattern>
        </v-flex>
        <v-flex lg10 xl9>
          <app-publication-content :publication="publication"></app-publication-content>
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
  data(){
    return {
      list_publications:publications,
    }
  },
  components:{
    AppPublicationPattern:publicationPattern,
    AppPublicationContent:publicationContent,
  },
  computed: {
    ...mapGetters('publication',{
      listTypePublication:'listTypePublication' ,
    }),
    ...mapGetters('header',{
      mdAndDown:'mdAndDown',
    })
    // TODO search publications dans BD , use filter id_member,departement,type,year
    // getPublications
  }
}
</script>
<style  scoped>
.production{
  border-left-width: 0.7em;
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
.type6{
  border-left-color: rgb(175, 96, 26)
}
.type7{
  border-left-color: rgb(93, 109, 126 )
}
</style>


