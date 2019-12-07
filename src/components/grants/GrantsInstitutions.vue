<template>
<div>
  <v-layout row wrap>
    <v-flex grow  ml-3 px-0>
      <v-img 
          :src="require('../../assets/grants/business-24px.svg')"
          max-height="50"
          position="left"
          aspect-ratio="1.7"
          contain>
          <div class="orange--text ml-3 pl-5 mt-3">Participating institutions:</div>
      </v-img>
    </v-flex>
    <v-flex shrink mx-0 px-0>
      <v-spacer></v-spacer>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs12  mx-0 px-0>
    <p v-for="(institution,index) in institutions" :key=index class="body-1">
       <span v-html="institution.institution"></span> 
    </p>
    </v-flex>
  </v-layout>
</div>
</template>
<script>
import grantsInstitutions  from '../../data/grants/grantsInstitutions.js';
export default {
  props:['id_grant'],
  data(){
    return{
      institutions:[],
    }
  },
  created: function(){ 
      var idGrant = this.id_grant;
      var institutionsArr = [];
      grantsInstitutions.forEach(function(element) {
       if(element.id_grant == idGrant)
        institutionsArr.push(element);
      });
      this.institutions = institutionsArr;
  }
}
</script>