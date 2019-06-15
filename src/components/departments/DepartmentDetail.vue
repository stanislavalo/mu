<template>
  <v-layout class="mx-0 px-0">
    <v-flex xs12 class=" px-0">
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="http://localhost:8080/src/assets/departments/docks.jpg">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <div class="headline mb-2">{{department.name[language]}} {{department.sigle}}</div>
                <router-link v-for="(item, index) in department.production"
                  :to="item.url" tag= "div" :key="index" class="my-0">
                  <img src="../../assets/departments/download.png" >
                  {{item.name[language]}}
                </router-link>
                
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <!-- src="http://localhost:8080/src/assets/departments/ede.jpg" -->
        <v-card-title>
          <div class="description">
            <span class="indigo--text subheading">{{page.head[language]}}: {{department.head.last_name}} 
              {{department.head.first_name}} {{department.head.title}}</span><br>
            <span>{{department.description}}</span>
          </div>
        </v-card-title>
        <v-flex xs12  justify-start >
          <v-btn flat color="orange" class="ml-0" @click="researchThemes = !researchThemes">
            <img v-if="!researchThemes" class="mr-1" src="../../assets/departments/outline-expand_more-24px.svg">
            <img v-else class="mr-1" src="../../assets/departments/outline-expand_less-24px.svg">
            {{page.themes[language]}}
          </v-btn>
          <ul id="researchThemes" v-if="researchThemes" class="description ml-4 themes">
            <template v-for="(theme, index) in department.themes"  >
            <p class="indigo--text mt-2 mb-0" :key="index"> {{theme.header}}</p>
            <li v-for="(item,index,key) in theme.items" :key="key">{{item}}</li>
            </template>
          </ul>
        </v-flex>
        <v-flex xs12  justify-start >    
            <v-btn flat color="orange" class="ml-0" @click="members=!members">
            <img v-if="!members" class="mr-1" src="../../assets/departments/outline-expand_more-24px.svg">
            <img v-else class="mr-1" src="../../assets/departments/outline-expand_less-24px.svg">
            {{page.members[language]}}</v-btn>
          <div v-if="members" class="row">
            <template v-for="(members,index) in membersBlock">
              <div class="col-sm" :key="index">
                <router-link 
                  v-for="(item, index) in members" :key="index" 
                  :to="item.url" tag="p"  class="my-0 py-0 pl-3">
                  <a class="purple--text text--darken-4 pr-2">{{item.last_name}} {{item.first_name}}</a>
                  {{item.type.category}} <span>(from {{item.type.from}})</span>
                </router-link>
              </div>
            </template>
          </div>
        </v-flex>
        <v-flex xs12  justify-start >    
          <v-btn flat color="orange" class="ml-0" @click="formerMembers = !formerMembers">
            <img v-if="!formerMembers" class="mr-1" src="../../assets/departments/outline-expand_more-24px.svg">
            <img v-else class="mr-1" src="../../assets/departments/outline-expand_less-24px.svg">
            {{page.membersFormer[language]}}
          </v-btn>
          <div v-if="formerMembers" class="row">
             <template v-for="(membersFormer,index) in membersFormerBlock">
              <div class="col-sm" :key="index">
                <router-link 
                  v-for="(item, index) in membersFormer" :key="index" 
                  :to="item.url" tag="p"  class="my-0 py-0 pl-3 grey--text text--darken-1 ">
                  <a class="pr-2 grey--text text--darken-1">{{item.last_name}} {{item.first_name}}</a>
                  {{item.type.category}} 
                  <span class="caption">({{item.type.from}} - {{item.type.to}})</span>
                </router-link>
              </div>
             </template>
          </div>
        </v-flex> 
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
// import data
import departments from '../../data/departments.js';
import pagedepartment from '../../data/pages/departments.js';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      id:this.$route.params.id,
      researchThemes:false,
      scientifiqueProduction: false,
      members: false,
      formerMembers: false,
      mdAndDown:false,
      department:{},
      page:pagedepartment,
      membersBlock:[],
      membersFormerBlock:[],
    }
  },
  mounted () {
    this.mdAndDown = this.$vuetify.breakpoint.mdAndDown;
    if(this.mdAndDown == false){
      this.researchThemes = true;
    };
    this.id = this.$route.params.id;
  },
  created(){
    this.id = this.$route.params.id;
    var idDepartment = this.id;
    var d = null;
    departments.forEach(function(dep) {
      if(dep.id == idDepartment){
        d = dep;
       } 
    });
    this.department = d;
    this.membersBlock = getBlockMembre(this.department.members);
    this.membersFormerBlock = getBlockMembre(this.department.formerMembers);
    function getBlockMembre(members){
      var m = [];
      var membersBlock=[];
      var i=0;
      var j=0;
      var nb = members.length;
      var  nb_block = Math.ceil((nb/3));
      members.forEach(function(member){
        j++;
        if(j > nb_block * (i+1)) {
          membersBlock.push(m);
          i++;
          m=[];
        }
        m.push(member); 
      });
      membersBlock.push(m);
      return membersBlock;
    }
  },
  computed: {
    ...mapGetters({
        language:'language',
    })
  }
}
</script>
<style>
.description{
  font-family: arial, Helvetica, sans-serif;
  font-size: 1.2em;
  font-weight: normal;
  font-stretch:expanded;
}
#researchThemes,#scientifiqueProduction{
  list-style-type: square;
}
</style>


