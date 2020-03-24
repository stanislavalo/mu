<template>
  <v-container id="news" class="mt-1 mb-0 pa-0" fluid >
    <app-crumps :crumps="crumps"></app-crumps>
    <v-layout  wrap row xs12  xl12 class="mt-0 mb-1 px-1">
      <v-flex  xs3 sm3 md2 lg1 xl1>
        <div class="mx-3 mt-2 pa-1 headline blue--text text--darken-4 ">
          {{ $t("news.title") }} 
        </div>
      </v-flex>
      <v-flex  xs3 sm3 md2 lg1 xl1>
         <app-selected-year-news></app-selected-year-news>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
    <v-layout wrap row  xs12  xl12 class="mt-0 mb-1 px-1"> 
      <v-flex  xs12  v-for="(item, index) in news" :key="index">
        <app-archive-item :item="item"></app-archive-item>
      </v-flex> 
    </v-layout>
  </v-container>
</template>
<script>

import news from '../../../data/about/newsArchive.js';
import selectYearNews from './SelectYearNews.vue';
import archiveItem from './ArchiveItem.vue';
import crumps from '../../sharing/Crumps.vue';

// import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      news:news,
      crumps: [{
          text: 'news.title',
          href: 'news'
        },
        {
          text: 'news.more',
          href: null,
          disableTranslated:true,
        },

      ]

    }
  },
  // computed: {
  //   ...mapGetters('header',{
  //       language:'language',
  //   })
  // },
  components:{
    AppSelectedYearNews:selectYearNews,
    AppArchiveItem: archiveItem,
    AppCrumps:crumps,
  }  
}
</script>
