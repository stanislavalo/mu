<template>
  <v-expansion-panel focusable >
    <v-expansion-panel-content class="mp-0">
      <template v-slot:header v-if="xsOnly"  >
        <div>{{ $t("production.publications")}} </div>
      </template>
      <template v-slot:header v-else>
        {{ $t("production.publications")}}
      </template>
      <v-card>
        <v-card-text class="grey lighten-3" key="running">
            <app-publications-list :typeProduction="typeProduction" :publications="dataPublications"></app-publications-list>
              <div>
                <v-expansion-panel>
                  <v-expansion-panel-content light>
                    <template v-slot:header>
                      MORE
                    </template>
                    <v-card>
                      <v-card-text>
                        <app-publications-list :typeProduction="typeProduction" :publications="dataPublicationsMore"></app-publications-list>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </div>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
import publicationsList from '../../research/publications/PublicationsList.vue';
import publications from '../../../data/research/publications';
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      typeProduction:'publications',
      dataPublications:[], 
      dataPublicationsMore:[],
    }
  },
  components:{ 
  'AppPublicationsList': publicationsList,
  },
  created(){
    var index =0;
    var list=[];
    var listMore=[];
    publications.forEach(function(element) {
      index++;
      if(index < 6 ){
        list.push(element);
       }
       else{
         listMore.push(element);
       } 
    });
    this.dataPublications = list;
    this.dataPublicationsMore = listMore;
  },
  computed:{
    ...mapGetters('researcher', {
    nb_publications:'nb_publications',
   }),
  }
  
}
</script>