<template>
<div>
  <p v-if="!IMleaderFirst" >
    <span :class="[isCaption ? 'caption' : 'body-1','font-weight-medium']">Main investigator: </span>
    <span v-if="mainInvestigator.id==0">{{mainInvestigator.last_name}} {{mainInvestigator.first_name}} </span>
    <router-link v-else class="blue--text text--darken-4 body-1 font-weight-bold " :to="{name:'researcher',params:{id:mainInvestigator.id}}" >
      {{mainInvestigator.last_name}} {{mainInvestigator.first_name}} 
    </router-link>
  </p>
  <p v-else class="body-1 font-weight-bold ">
    IM leader:
    <router-link class="blue--text text--darken-4" :to="{name:'researcher',params:{id:IMleader.id}}" >
       {{IMleader.last_name}} {{IMleader.first_name}}
    </router-link>
  </p>
  <p v-if="isExternMainInvestigator" class="caption font-weight-medium ">Main investigator: {{mainInvestigator.last_name}} {{mainInvestigator.first_name}} </p>

</div>
</template>
<script>
import members from '../../data/people/members.js';
import investigators from '../../data/grants/grantsInvestigators.js';
import mainInvestigators from '../../data/grants/grantMainInvestigators.js';
export default {
  props:['IMleader','IMleaderFirst','mainInvestigator'],
  data() {
    return{
      isCaption:false,
      isExternMainInvestigators:false,
    }
  },
  created(){
    if(this.mainInvestigator.id == 0){ 
      this.isCaption = true;
    }
    if(this.IMleaderFirst && this.mainInvestigator.last_name){ 
      this.isExternMainInvestigator = true;
    }   
  }
}
</script>