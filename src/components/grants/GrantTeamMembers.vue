<template>
<div>
  <v-layout row wrap>
    <v-flex grow  ml-3 px-0>
      <v-img 
          :src="require('../../assets/grants/team.png')"
          max-height="45"
          position="left"
          aspect-ratio="1.7"
          contain>
          <div  class="orange--text ml-3 pl-5 mt-3">IM team</div>
      </v-img>
    </v-flex>
    <v-flex shrink mx-0 px-0>
      <v-spacer></v-spacer>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs12  mx-0 px-0 class="body-1">
    <p class="hidden-sm-and-up" v-for="(member,index) in IMteam" :key=index>
      <router-link :to="{name:'researcher',params:{id:member.id_investigator}}" class="blue--text text--darken-4">
        <span class="font-weight-bold ">{{member.last_name}} </span>{{member.first_name}}
      </router-link>
    </p>
    <span class="hidden-xs-only" v-for="(member) in IMteamInline" :key=member.id>
      <router-link :to="{name:'researcher',params:{id:member.id_investigator}}" class="blue--text text--darken-4">
         <span class="font-weight-bold ">{{member.last_name}} </span> {{member.first_name}}
      </router-link> 
    </span>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
export default {
  props:['IMteam'],
  data(){
    return{
      IMteamInline:[],
    }
  },
  created: function(){ 
      var team = this.IMteam;
      var teamInline = [];
      var teamLenght = team.length -1;
      this.IMteamInline= teamInline;
      team.forEach(function(element) {
        if(teamInline.length != teamLenght)
          element.first_name = element.first_name + ', ';
        teamInline.push(element);
      });
      this.IMteamInline= teamInline;
  }
}
</script>