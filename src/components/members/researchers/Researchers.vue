<template>
  <v-layout>
    <v-flex  xs12  xs offset-sm3-xl0>
      <div class="ma-0 pa-1 headline blue--text text--darken-4 ">{{ $t("researchers.title") }}</div>
      <v-card>
        <v-container grid-list-sm fluid class="ma-0 pa-1">
          <v-layout row wrap>
            <v-flex
              v-for="(researcher,index) in researchers"
              :key=index
              xs6 xl12
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
import departments from '../../../data/departments';
import members from '../../../data/members';
import researchersCard from './ResearchersCard.vue';
import researchersList from './ResearchersList.vue';
import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      researchers:[],
    }
  },
  created() {
    var researchersData = [];
    members.forEach(function(element) {
      var researcher= {};
      if(element.status.activ && element.type.researcher && element.typeResearcher.type == 'researcher'){
          researcher.id = element.id;
          researcher.last_name = element.last_name;
          researcher.first_name = element.first_name;
          researcher.title = element.title;
          researcher.interest= getInterest(element.interest);
          if(element.photo){ 
            researcher.photo = "http://localhost:8080/src/data/photos/"+element.id+".jpg"
          }
          else{
            researcher.photo = "http://localhost:8080/src/assets/members/noimg_middle.png";

          }
          researcher.department =getDepartement(element.typeResearcher);
          researchersData.push(researcher);
      }
    });
    this.researchers = researchersData;   
  },
  computed: {
    ...mapGetters({
        language:'language',
        mdAndDown:'mdAndDown'
    })
  },
  components:{
    AppResearchersCard:researchersCard,
     AppResearchersList:researchersList,
  }
}
function getDepartement(typeResearcher) {  
  var department = [];
  var departmentId = typeResearcher.departmentId;
  departments.forEach(function(departmentItem){
    if(departmentItem.id == departmentId){
      department.push(departmentItem.name[0]);
      department.push(departmentItem.name[1]);
      department.push(departmentItem.sigle);
      department.push(departmentId);
    }
  });
  return department;  
}
function getInterest(interest){
  var description = '';
  interest.forEach(function(item){
    description = description +  item.description + ' ,';
  });
  return description;
}
</script>
<style>
p.interests{
    background-color: #424242;
    border-color: #424242;
    color: #fff;
}
</style>