
<template>
  <v-container fluid>
    <v-layout row wrap class="mb-2 mx-1">
      <v-flex   v-if="showAwards" xs12 class="blue--text text--darken-4">
        <span class="headline ">{{ $t("events.awards") }}</span>
        <span class="subheading ml-4" @click="showAwards=!showAwards">/ &nbsp;&nbsp;{{$t("events.bestPapers")}}</span>
      </v-flex>
      <v-flex v-else xs12 class="blue--text text--darken-4 ">
          <span class="headline">{{$t("events.bestPapers")}}</span>
          <span class="subheading ml-4" @click="showAwards=!showAwards">/ &nbsp;&nbsp;{{ $t("events.awards") }}</span>
      </v-flex>
    </v-layout>
    <v-layout  row wrap class="my-0 mx-1">
    <v-flex xs12>
      <div  v-if="!showAwards">Awarding the authors from the Institute of Mathematics for best papers has been terminated.</div>
      <v-card>
        <v-list two-line v-if="!mdAndDown">
          <template v-for="(item, index) in awardsItems">
            <v-list-tile :key="index" avatar>
              <v-list-tile-avatar >
                <img :src="listStyle">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.header" ></v-list-tile-title>
                <v-list-tile-sub-title class="blue-grey--text text--darken-3"  v-html="item.text" > 
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
        <div v-else>
          <template v-for="(item, index) in awardsItems">
            <p :key="index" class="subheading font-weight-bold mt-2" v-html="item.header"></p>
            <p :key="index+'l'" v-html="item.text"></p>
          </template>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
import awardsData from '../../../data/events/awards';
import {mapGetters} from 'vuex';
  export default {
    data () {
      return {
        listStyle:'http://localhost:8080/src/assets/members/circle.png',
        awards:[],
        papers:[],
        showAwards:true,
      }
    },
    created(){
      var awardsList=[];
      var papersList= [];             
      var award = {};
      awardsData.forEach(function(element){
        var awardText=element.award_text;
        var n = awardText.indexOf(":");
        award={};
        award.header = awardText.substring(0,n);
        n++;
        award.text = awardText.substring(n);
        if(element.award_type == 1)
          awardsList.push(award);
        else
          papersList.push(award) ;
      });
      this.awards=awardsList;
      this.papers= papersList;
    },
    computed:{
      ...mapGetters('header',{
        mdAndDown:'mdAndDown',
      }),
      awardsItems:function(){
        if(this.showAwards)
          return this.awards;
        else
        return this.papers;  
      }

    }
  }
</script>
<style scoped>
p {
  text-align: justify;
}
</style> 