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
                <div>
                  <v-img
                  :src=researcher.photo
                  :lazy-src=researcher.photo
                    aspect-ratio="0.75"
                    class="grey lighten-2"
                  >
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
                    <h5 class="mb-0">{{researcher.first_name}} {{researcher.last_name}}</h5>
                    <p class="ma-0 pa-0 caption">{{researcher.title}}</p>
                    <p class="ma-0 pa-0">Departement: <span class="body-2">{{researcher.department[2]}}</span></p>
                    <p class="body-2 mb-1">{{researcher.department[language]}}</p>
                    <p class="ma-0 pa-1 tt">	Research interests:<br>{{researcher.interest}}</p>
                  </div>
                </div>
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
          researcher.interest= element.interest;
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
    console.log("-------researchers-----");
    console.log(this.researchers);       
  },
  computed: {
    ...mapGetters({
        language:'language',
    })
  }
}
function getDepartement(typeResearcher) {  
  var department = [];
  console.log(typeResearcher);
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
</script>
<style>
p.tt{
    background-color: #424242;
    border-color: #424242;
    color: #fff;
}
</style>