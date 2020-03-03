<template>
<div class="mb-2">
  <app-crumps :crumps="crumps"></app-crumps>
  <v-layout>
    <v-flex  xs12  xs offset-sm3-xl0>
      <div class="ma-0 pa-1 headline blue--text text--darken-4 ">
        <span v-html="grant.title"></span>
        </div>
    </v-flex>
  </v-layout>
  <v-layout class="mx-0 px-0 my-2">
    <v-flex xs12 class=" px-0 mx-0"> 
      <v-card width="100%" flat class=" px-1 mx-0 py-0" >
        <app-grant-title :showTitle=false :item="grant"></app-grant-title>
        <app-grant-main-leaders :IMleader= IMleader :IMleaderFirst= IMleaderFirst :mainInvestigator=mainInvestigator></app-grant-main-leaders>
        <app-grant-description :seeDescription="seeDescription" :description="grant.description" :showIcon=true ></app-grant-description> 
      </v-card>
    </v-flex>
  </v-layout>
  <app-grant-team-members v-if="IMteam.lenghth" :IMteam=IMteam></app-grant-team-members>
  <app-grants-institutions :id_grant="id_grant"></app-grants-institutions>
</div>   
</template>
<script>
import {mapGetters} from 'vuex';

import members from '../../data/people/members.js';
import investigators from '../../data/grants/grantsInvestigators.js';
import mainInvestigators from '../../data/grants/grantMainInvestigators.js';
import grants from '../../data/grants/grantsList';
import grantTitle from './GrantTitle.vue';
import grantMainLeaders from './GrantMainLeaders.vue';
import grantDescription from './GrantDescription.vue';
import grantTeamMembers from './GrantTeamMembers.vue';
import grantsInstitutions from './GrantsInstitutions.vue';
import CrumpsVue from '../sharing/Crumps.vue';
export default {
  data(){
    return {
      id_grant: this.$route.params.id,
      grant:{},
      seeDescription:false,
      IMleaderFirst:false,
      IMleader:{last_name:null,first_name:null},
      mainInvestigator:{last_name:null,first_name:null},
      IMteam:[],
      crumps: [],
    }
  },
  components:{
    appGrantDescription:grantDescription,
    appGrantTitle:grantTitle,
    appGrantMainLeaders: grantMainLeaders,
    appGrantTeamMembers: grantTeamMembers,
    appGrantsInstitutions: grantsInstitutions,
    appCrumps: CrumpsVue,
  },
  created:function(){
    var leader={};
    var leaderFirst=false;
    var investigatorsGrant = [];
    var team = [];
    var objectInvestigator = {};
    var idGrant = this.id_grant;
    var member ={};
    var mainId = null;
    var grantData = {};
    var id = this.id_grant;
    this.seeDescription = !this.$vuetify.breakpoint.xsOnly;
    
    //data grants
    grants.forEach(function(element) {
      if(element.id_grant == id){
         grantData = element;
      }
    });
    this.grant = grantData;
    //crumbs
    this.crumps.push({
          text: "grants."+this.typeGrant,
          disabled: false,
          href: 'grant-type',
          params:{type:this.typeGrant},
    }),  
    this.crumps.push({
          text: grantData.title,
          disabled: true,
          href: '' 
    });
    // data investigators
    members.forEach(function(memberElement) {
        member = memberElement;
        investigators.forEach(function(element) {
          if(element.id_grant == idGrant ){
            if(element.id_investigator == member.id  ){ 
              var  objectInvestigator = {
                id_investigator:element.id_investigator,
                type_investigator:element.type_investigator,
                last_name:null,
                first_name:null,
              };
              if(element.type_investigator !=3){
                objectInvestigator.last_name = member.last_name;
                objectInvestigator.first_name = member.first_name;
              }
              investigatorsGrant.push(objectInvestigator); 
            }
            if(element.id_investigator == 0 && element.type_investigator){
              leaderFirst = true; 
            }
          }
        });
      
    });
    investigatorsGrant.forEach(function(el){
      if(el.type_investigator == 1) {
        leader.last_name = el.last_name;
        leader.first_name = el.first_name; 
        leader.id = el.id_investigator;
      }
      if(el.type_investigator == 0){
        team.push(el);
      }
      if(el.type_investigator == 3){
        mainId = el.id_investigator;
      }
      if(el.type_investigator == 2 && leaderFirst == false){
        objectInvestigator = {last_name:el.last_name,first_name:el.first_name,id:el.id_investigator};
      }
    });
    this.IMleaderFirst = leaderFirst;
    this.IMleader = leader;
    this.IMteam = team;
    //main investigator
    if(mainId){
      objectInvestigator = {};
      mainInvestigators.forEach(function(element){
        if(element.id == mainId){
          objectInvestigator = {last_name:element.main_last_name,first_name:element.main_first_name,id:0};
        }
      });
    }
    if(objectInvestigator) 
      this.mainInvestigator = objectInvestigator;
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
    }),
    ...mapGetters('grants',{
      typeGrant:'typeGrant'
    }),
  },
}
</script>
