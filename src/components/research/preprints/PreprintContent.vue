<template>
  <div class="body-1">
    <div>
      <span v-for="(author,index) in preprint.authors" :key="index" 
        :class="{'indigo--text text--darken-2':author.type}">
        {{author.name_last}} {{author.name_first}}
        <span v-if="index < preprint.authors.length - 1">,</span></span> 
    </div>
    <div class="font-italic">{{preprint.title}}</div>
    <v-layout row v-if="preprint.type_display" @click="getPublication" :class="['ml-1',{'yellow':!toggleDown}]">
      <span class="caption font-weight-bold">{{preprint.text_display}} </span>
      <img  v-if="toggleDown"  src="../../../assets/research/down.png" class="pl-1">
      <img v-else src="../../../assets/research/up.png" class="pl-1 pb-1">
    </v-layout>
    <v-card v-if="!toggleDown" row class=" pt-2 ml-1 grey lighten-4">
      <app-publication-pattern :publication="publication" :listTypePublication="listTypePublication"
        class="hidden-md-and-up">
      </app-publication-pattern>
      <app-publication-content :publication="publication" class="hidden-md-and-up"></app-publication-content> 
      <v-layout  v-if="!toggleDown" row class="hidden-sm-and-down pt-2 ml-1 grey lighten-4">
          <v-flex lg2 xl1 xs12 class="ml-3 mr-3" >
            <app-publication-pattern :publication="publication" :listTypePublication="listTypePublication"></app-publication-pattern>
          </v-flex>
          <v-flex lg10 xl9>
            <app-publication-content :publication="publication" ></app-publication-content> 
          </v-flex>
      </v-layout>
    </v-card>
  </div> 
</template>
<script>
import publicationPattern from '../publications/PublicationPattern.vue';
import publicationContent from '../publications/PublicationContent.vue';

export default {
  props:['preprint','listTypePublication'],
  data(){
    return{
      toggleDown:true,
      publication:null,
    }
  },
  components:{
    AppPublicationPattern:publicationPattern,
    AppPublicationContent:publicationContent,
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