<template>
  <v-layout>
    <v-flex  xs12  xl12 xs offset-sm3-xl0>
      <div class="mx-0 mt-2 pa-1 headline blue--text text--darken-4 ">{{ $t("postdocs.title") }}</div>
      <v-card>
        <v-container grid-list-sm fluid class="ma-0 pa-1">
          <v-layout row wrap>
            <v-flex
              v-for="(researcher,index) in researchers"
              :key=index
              xs6 lg6 xl6 offset-xl="1"
              d-flex
            >
              <app-researchers-card v-if="mdAndDown" :researcher="researcher"></app-researchers-card>
              <app-researchers-list v-else :researcher="researcher"></app-researchers-list> 
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import departments from '../../../data/departments.js';
import members from '../../../data/people/postdocs.js';
import researchersCard from '../researchers/ResearchersCard.vue';
import researchersList from '../researchers/ResearchersList.vue';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      researchers:[],
    }
  },
  created() {
    var researchersData = [];
    var deps = departments;
    function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
    members.forEach(function(element) {
      var researcher= {};
      if(element.status == 0 ){
          researcher.id = element.id;
          researcher.last_name = element.last_name;
          researcher.first_name = element.first_name;
          researcher.title = element.title;
          researcher.per_email = element.per_email;
          researcher.typeResearcher = " postdoc";
          if(element.id > 6000){ 
            researcher.typeResearcher = "doc";
            researcher.university = element.university;
            researcher.supervisors = element.supervisors;
          }
          if(element.id %2){ 
            var photoId = getRandomInt(12) +1;
            researcher.photo = "http://www-test.math.cas.cz/data/photos/"+photoId+ ".jpg"
            // researcher.photo = "http://localhost:8080/src/data/photos/"+element.id+".jpg"
          }
          else{
            researcher.photo = "http://www-test.math.cas.cz/data/photos/noimg_middle.png";

          }
          var department = {};
          var departmentId = element.id_department;
          deps.forEach(function(departmentItem){
            if(departmentItem.id == departmentId){
              department.name = departmentItem.name;
              department.sigle = departmentItem.sigle;
              department.id = departmentId;
            }
          });
          researcher.department = department;
          researchersData.push(researcher);
      }
    });
    this.researchers = researchersData;   
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
        mdAndDown:'mdAndDown'
    })
  },
  components:{
    AppResearchersCard:researchersCard,
     AppResearchersList:researchersList,
  }
}
function getDepartement(depId) {  
  var department = {};
  var departmentId = depId;
  departments.forEach(function(departmentItem){
    if(departmentItem.id == departmentId){
      department.name = departmentItem.name;
      department.sigle = departmentItem.sigle;
      department.id = departmentId;
    }
  });
  return department;  
}
</script>
<style>
p.interests{
    background-color: #424242;
    border-color: #424242;
    color: #fff;
}
</style>