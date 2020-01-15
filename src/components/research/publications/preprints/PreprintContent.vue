<template>
  <div class="body-1">
    <div class="font-italic">{{preprint.title}}</div>
    <v-layout row v-if="preprint.type_display" @click="getPublication" :class="['ml-1',{'yellow':!toggleDown}]">
      <span class="caption font-weight-bold">{{preprint.text_display}} </span>
      <span  v-if="!mdAndDown"> 
        <img  v-if="toggleDown"  src="/src/assets/research/down.png" class="pl-1">
        <img v-else src="/src/assets/research/up.png" class="pl-1 pb-1">
      </span>
      <span v-else class="caption font-weight-bold">
        <span  v-if="toggleDown" class="pt-1 px-1 ">+</span>
        <span v-else class="pt-1 px-1 font-weight-bold subheading">-</span>
      </span> 
    </v-layout>
    <v-card v-if="!toggleDown" class=" pt-2 ml-1 grey lighten-4">
      <!-- <app-publication-pattern :publication="publication" class="hidden-md-and-up"></app-publication-pattern> -->
      <!-- <app-publication-content :publication="publication" class="hidden-md-and-up"></app-publication-content>  -->
      <v-layout  v-if="!toggleDown" class="pt-2 ml-1 grey lighten-4">
          <v-flex xs4 lg2 xl1  class="ml-3 mr-3" >
            <app-publication-pattern :publication="publication" ></app-publication-pattern>
          </v-flex>
          <v-flex xs8 lg4 xl9>
            <app-authors-title :title="publication.title" :authors="publication.authors"></app-authors-title>
            <app-basic-publication :type="publication.type" :year="publication.year" 
        :object_type="publication.object_type"></app-basic-publication>
          </v-flex>
      </v-layout>
    </v-card>
  </div> 
</template>
<script>
import publicationPattern from '../PublicationPattern.vue';
import basicPublications from '../BasicPublications.vue';
import authorsTitle from '../AuthorsTitle.vue';
import {mapGetters} from 'vuex';
export default {
  props:['preprint'],
  data(){
    return{
      toggleDown:true,
      publication:null,
    }
  },
  components:{
    AppPublicationPattern:publicationPattern,
    AppBasicPublication:basicPublications,
    AppAuthorsTitle:authorsTitle,
  },
  computed: {
    ...mapGetters('header',{
      mdAndDown:'mdAndDown',
    })
  },
  methods:{
    getPublication() {
      this.toggleDown = !this.toggleDown;
      this.publication = {
        type:4, // Chapter in monograph  
        grants:[{url:null,id_grant:105,
            name:'AOS(318910)'
          },
          {url:null,id_grant:106,
            name:'GA17-27844S'
          }
        ],
        url_repository:'https://asep.lib.cas.cz/arl-cav/cs/detail-cav_un_epca-0501201-Joint-numerical-ranges-and-compressions-of-powers-of-operators/',
        // type author in IM: true,false 
        authors:[{type:1 , name_last:'Müller', name_first:'Vladimír'},
        {name_last:'Tomilov', name_first:'Yuri'}
        ],
        title:{url:null,
          name:'Complementary error boundsfor elliptic systems and applications'},
        year:2019,
        object_type:{
          title_book:'Operator Theory',
          serie_volume: null,
          editors:'Daniel Alpay',
          publisher:'Springer',
          address_publisher:'Basel',
          pages_from:'1',
          pages_to:'29'
        }
      };
    }
  },
}
</script> 