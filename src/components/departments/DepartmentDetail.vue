<template>
  <v-layout class="mx-0 px-0 mt-1">
    <v-flex xs12 class="px-0 mx-0">    
      <div class="headline ml-3 mb-2">{{department.name[language]}} {{department.sigle}} </div>
      <div id="prod" class="ml-3 mb-0">
        <router-link v-for="(item, index) in productions"
          :to="{name:item.url, params:{idDepartment:id}}"  :key="index" 
          class="my-0 pr-4 productions subheading font-weight-bold ">
          <a class="purple--text text--darken-4">
            {{ $t("production."+ item.name) }} 
          </a>
        </router-link>
      </div>
      <v-card class=" px-0 ma-0" flat>
        <v-card-title class="my-0 py-1">
          <div class="description my-0 py-0">
            <span class="indigo--text subheading">{{ $t("department.head") }}: {{department.head.last_name}} 
              {{department.head.first_name}} {{department.head.title}}</span>
            <p class="textjustify">{{department.description}}</p>
          </div>
        </v-card-title>
        <v-flex xs12  justify-start >
          <v-btn flat color="orange" class="ml-0" @click="researchThemes = !researchThemes">
            <img v-if="!researchThemes" class="mr-1" src="../../assets/departments/outline-expand_more-24px.svg">
            <img v-else class="mr-1" src="../../assets/departments/outline-expand_less-24px.svg">
            {{ $t("department.themes") }}
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
            {{ $t("department.members") }}</v-btn>
          <div v-if="members" class="row">
            <template v-for="(members,index) in membersBlock">
              <div class="col-sm" :key="index" >
                <router-link 
                  v-for="(item, index) in members" :key="index" 
                  :to="{name:'researcher',params:{id:1}}" tag="p"  class="my-0 py-0 pl-3">
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
            {{ $t("department.membersFormer") }}
          </v-btn>
          <div v-if="formerMembers" class="row">
             <template v-for="(membersFormer,index) in membersFormerBlock">
              <div class="col-sm" :key="index">
                <router-link 
                  v-for="(item, index) in membersFormer" :key="index" 
                  :to="{name:'researcher',params:{id:1}}" tag="p"  class="my-0 py-0 pl-3 grey--text text--darken-1 ">
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
import departments from '../../data/departments';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      id:this.$route.params.id,
      productions:[
        {
          name:'publications', 
          url:'publications' 
        },
        {
          name:'lectures', 
          url:'lectures'
        },
      ],
      researchThemes:false,
      scientifiqueProduction: false,
      members: false,
      formerMembers: false,
      mdAndDown:false,
      department:{},
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
    ...mapGetters('header',{
        language:'language',
    })
  }
}
</script>
<style scoped>
#prod span:hover,
#prod span.router-link-active,
#prod span.router-link-exact-active {
   text-decoration: underline;
   cursor: pointer;
 }
 .productions{
   text-decoration: underline;
    color: #3479B2;
 }
 
.description{
  font-family: arial, Helvetica, sans-serif;
  font-size: 1.2em;
  font-weight: normal;
  font-stretch:expanded;
}
.textjustify{
  text-align: justify 
}
#researchThemes,#scientifiqueProduction{
  list-style-type: square;
}
</style>


