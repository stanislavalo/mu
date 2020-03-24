<template>
   <v-card color="indigo lighten-5" width="100%">
      <v-card-title> 
        <div class="subheading">
          <app-pattern-perso :item="board.vice_chair" :index="1"></app-pattern-perso>
          <app-pattern-perso :item="board.secretary" :index="1"></app-pattern-perso>
          <div v-for="(itemList, index) in board.members" :key="index" class="mb-1">
            <p class="orange--text text--darken-4 mr-2">{{itemList.function[language]}} </p>
            <p v-for="(member, index) in itemList.list" :key="index" v-html="member"></p>
          </div>
          <div v-if="board.document">
            <a :href="board.document.url"  class="purple--text text--darken-4 activities" target="_blanc">
              <span v-html="board.document.text"></span>
            </a>
          </div>
        </div>
      </v-card-title>
   </v-card>
</template>
<script>
import {mapGetters} from 'vuex';


import patternPerso from './PatternPerso.vue';

export default {
  props:['board'],
  //props:['type'],
  // data(){
  //   return {
  //     board:boardData,
  //   }
  // },
  computed:{
    ...mapGetters('header',{
      language:'language',
    })
  },

  components:{
    AppPatternPerso:patternPerso,
  },
  // created(){
  //   if(this.type == "supervisory"){
  //     this.board = supervisoryData;
  //   }
  // }
}
</script>
<style scoped>
  .activities{
   text-decoration: underline;
 }
 </style>