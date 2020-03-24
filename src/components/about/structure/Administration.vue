<template>
   <v-flex xs12 class="subheading black--text font-weight-regular">
     <v-card  v-for="(item, index) in administrationData" :key="index" 
      elevation="1" class="mx-0 mb-3" width="100%">
      <v-card-title> 
        <div>
          <app-pattern-perso :item="item" :index="index"></app-pattern-perso>
          <p  v-if="index==3"  class="ml-0 pt-2" @click="openBoard = !openBoard">
            <span class="subheading blue--text text--darken-4 font-weight-bold ">
              {{ $t("structure.board") }}
            </span>
            <img v-if="!openBoard" class="mr-1" src="../../../assets/departments/outline-expand_more-24px.svg">
            <img v-else class="mr-1" src="../../../assets/departments/outline-expand_less-24px.svg">   
          </p>
          <p v-if="index==3" width="100%" >
            <app-board v-if="openBoard" :board="boardData" :key="index"></app-board>
          </p>
          <p  v-if="index==4"  class="ml-0 pt-2" @click="openSupervisoryBoard = !openSupervisoryBoard">
            <span class="subheading blue--text text--darken-4 font-weight-bold ">
              {{ $t("structure.supervisory") }}
            </span>
            <img v-if="!openSupervisoryBoard" class="mr-1" src="../../../assets/departments/outline-expand_more-24px.svg">
            <img v-else class="mr-1" src="../../../assets/departments/outline-expand_less-24px.svg">   
          </p>
          <p v-if="index==4" width="100%" >
            <app-board v-if="openSupervisoryBoard" :board="supervisoryData" :key="index" ></app-board>
          </p>
        </div>
      </v-card-title>
      <v-card-text class="mt-0 pt-0 mb-0 pb-0">
        <div v-if="item.office" class="subheading">
          <app-pattern-perso :item="item.office" :index="1"></app-pattern-perso>
          <p v-if="item.office.fax" :class="[{'ml-0':smAndDow},{'ml-3':!smAndDown}]">
            Fax {{item.office.fax}}
          </p>
        </div>
      </v-card-text>  
      </v-card> 
   </v-flex>
</template>
<script>
import administrationData from '../../../data/about/structure/administration.js';
import boardData from '../../../data/about/structure/board.js';
import supervisoryData from '../../../data/about/structure/supervisory.js';
import board from './Board.vue';
import patternPerso from './PatternPerso.vue';
import {mapGetters} from 'vuex';
export default {
  data(){
    return {
      administrationData:administrationData,
      boardData:boardData,
      supervisoryData:supervisoryData,
      openBoard:false,
      openSupervisoryBoard:false,
    };
  },
  computed:{
    ...mapGetters('header',{
      smAndDown:'smAndDown',
      language:'language',
    })
  },
  components:{
    AppBoard:board,
    AppPatternPerso:patternPerso,
  }
}
</script>
<style scoped>

</style>