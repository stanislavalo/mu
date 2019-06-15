<template>
  <v-container class="mx-2">
    <v-flex xs12 class=" px-0">
    <v-layout row wrap class="mb-2">
      <v-flex xs12>
      <span class="headline blue--text text--darken-4 ">Staff</span>
      </v-flex>
    </v-layout>
    <v-layout  row wrap>
      <v-flex xs12>
      <div class="row summary my-2" v-for="(item, index) in staff" :key="index" >
        <div class="col-sm-4 title pb-1">{{item.last_name}}
          <span class="subheading font-weight-bold">{{item.first_name}}</span>
          <a :href="'mailto:' + item.per_email">
            <img src="../../assets/letter.png" >
          </a>
          <div class="row body-2 font-weight-regular ml-0 mt-1 grey--text text--darken-2">{{item.title}}</div>
        </div>
        <div class="col-sm-3">tel: {{item.telephone }}</div> 
        <div class="col-sm-4">fax: {{item.fax }}</div>   
        <div class="col-sm-1" >Office:&nbsp;
          <span class="font-weight-bold">{{item.office}}</span>
        </div>
      </div>
      </v-flex>
    </v-layout>
    </v-flex>
  </v-container> 
</template>
<script>
// import data

import members from '../../data/members';
export default {
  data(){
    return {
      staff:[],
    }
  },
  created: function() {
    var staffData = [];
    members.forEach(function(element) {
      if(element.status.activ && element.type.staff){
        staffData.push(element);
      }
    });
    this.staff = staffData;
  },
}
</script>
<style>
div.summary{
  border-bottom: 3px solid rgba(224,224,224, 0.6);
}
 
</style>
