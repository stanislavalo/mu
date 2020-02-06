<template>
  <div id="search" class="grey lighten-4">
    <v-flex  xs12 xl12 class="mt-2 mb-2">
      <v-card >
        <v-card-title >
          <v-flex  xl2>
            <span class=" headline blue--text text--darken-4 ">
              {{ $t("production.lectures") }} <span v-if="sigleDepartment">{{sigleDepartment}}</span>
            </span>
          </v-flex>
          <v-flex xl8 lg9>
            <app-select :typeProduction="typeProduction" :showType="showType" :showDepartments="showDepartments"></app-select>
          </v-flex>
          <v-spacer></v-spacer>
        </v-card-title>
      </v-card>
    </v-flex>
    <app-publications-list :typeProduction="typeProduction" ></app-publications-list> 
  </div>
</template>
<script>
import departments from '../../../../data/departments.js';
import select from '../../Select.vue';
import publicationsList from '../PublicationsList.vue';
export default {
  data(){
    return{
      idDepartement:null,
      sigleDepartment:null,
      typeProduction:'lectures',
      showType:false,
      showDepartments:true,
    }
  },
  created(){
    if(this.$route.params.idDepartment){ 
      this.idDepartement =  this.$route.params.idDepartment; 
      this.showDepartments = false;
      var depId= this.idDepartement;
      var sigle = null;
      departments.forEach(function(dep) {
          if(dep.id == depId){
            sigle = dep.sigle;
          } 
        });
        this.sigleDepartment= sigle;
    }
    else
      this.showDepartments = true;
  },
  components:{
    appSelect:select,
    appPublicationsList:publicationsList,
  },
}
</script>
<style>
#search{
  width: 100%; 
  margin: auto;
}
</style>
