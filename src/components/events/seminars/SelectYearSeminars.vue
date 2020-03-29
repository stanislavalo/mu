<template>
  <div class="my-2 px-0 custom-control " :class="{'custom-control-inline':smAndDown}  ">
    <label class="mt-1 mb-0 ml-1 mr-2 " for="inputYear" >
      <span class="body-1">Select</span>
    </label>
    <select id="inputYear" class=" custom-select body-1 mt-0" v-model="selectedYear" @change="onChange()">
      <option v-for="(year,index) in years" :key="index" :value="year.value">{{year.label}}</option>
    </select>
  </div> 
</template>
<script>

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
  props:[],
   data(){
    return{ 
      selectedYear:2100,
      years:[],
    }
  }, 
  created(){
    this.years = this.getYears(2010);  
  },
   computed: {
    ...mapGetters('header',{
        smAndDown:'smAndDown'
    })
   },
  methods:{
    onChange(){
     setConferencesYear(this.selectedYear);
    },
    getYears(start){
      var options = [{value:2100,label:'upcoming'}];
      var yyyy = new Date().getFullYear();
      for (let i = yyyy; i >= start; i--) { 
        options.push({value:i,label:i.toString()});
      }  
      options.push({value:0,label:'All'});
      return options;
    },
  }
}
</script>