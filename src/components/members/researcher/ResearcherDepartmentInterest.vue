<template>
  <v-container grid-list-xl class="mx-0 px-0 my-0">  
    <v-layout row class="mx-0 px-0">
      <v-flex xs12 class="mx-0 px-0">
        <v-sheet class="transparent mx-0 px-0 ">
            <router-link :to="{name:'detail',params:{id:researcher.department[2]}}" >
              <h2 class=" orange--text title">
                {{ $t("researcher.department") }}{{researcher.departmentDetail[language]}}
              </h2>
            </router-link>
        </v-sheet>
      </v-flex>
    </v-layout>
    <app-researcher-interest :interest="researcher.interest"></app-researcher-interest>
    <v-layout row class="mx-0 px-0">
      <v-flex xs12 class="ml-2 px-0">
        <app-researcher-info   v-if="xsOnly" :researcher="researcher"></app-researcher-info>
      </v-flex>
    </v-layout>

  </v-container>  
</template>
<script>
import researcherInterest from './ResearcherInterest.vue';
import researcherInfo from './ResearcherInfo.vue';
import {mapGetters} from 'vuex';
export default {
  props:['researcher'],
  data(){
    return{
      xsOnly:false,
    }
  },
  created(){
    this.xsOnly = this.$vuetify.breakpoint.xsOnly;
  },
  computed: {
  ...mapGetters('header',{
      language:'language',
    }),
  },
  components:{
    'AppResearcherInterest':researcherInterest,
    'AppResearcherInfo':researcherInfo,
  } 
}
</script>

