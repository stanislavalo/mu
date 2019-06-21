<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <div class="ma-0 pa-1 headline blue--text text--darken-4 ">Researchers</div>
      <v-card>
        <v-container grid-list-sm fluid class="ma-0 pa-1">
          <v-layout row wrap>
            <v-flex
              v-for="(researcher,index) in researchers"
              :key=index
              xs6
              d-flex
            >
              <v-card  tile class="d-flex">
                <router-link :to="{name:'researcher',params:{id:researcher.id}}" >
                  <div class="black--text">
                  <v-img
                  :src=researcher.photo
                  :lazy-src=researcher.photo
                    aspect-ratio="0.75"
                    class="grey lighten-2"
                  >
                    <v-container fill-height fluid >
                      <v-layout align-end justify-end ml-4 mt-4>
                        <v-spacer></v-spacer>
                        <v-flex xs4 align-end  flexbox>
                          <img src="../../assets/members/ic_assignment_ind.png">
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <template v-slot:placeholder>
                      <v-layout
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                    <div class="mt-2 ml-1">
                      <h5 class="mb-0  black--text">{{researcher.first_name}} {{researcher.last_name}}</h5>
                      <!-- <img v-if="!formerMembers" class="mr-1" src="../../assets/members/chevron-right.png"> -->
                      <p class="ma-0 pa-0  black--text caption">{{researcher.title}}</p>
                      <p class="ma-0 pa-0  black--text">Departement: <span class="body-2">{{researcher.department[2]}}</span></p>
                      <p class="body-2 mb-1  black--text">{{researcher.department[language]}}</p>
                      <p class="ma-0 pa-1 interests">Research interests:<br>{{researcher.interest}}</p>
                    </div>
                  </div>
                </router-link>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import departments from '../../data/departments';
import members from '../../data/members';
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
            researcher.photo = "http://localhost:8080/src/data/photos/0.png";

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
    })
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