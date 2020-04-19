<template>
<div class="ml-0 mt-2 pt-1">
    <select id="inputYear" class=" custom-select body-1" v-model="selectedYear" @change="onChange()">
      <option v-for="(year,index) in years" :key="index" :value="year.value">{{year.label}}</option>
    </select>
</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props:[],
   data(){
    return{ 
      selectedYear:new Date().getFullYear() - 1,
      years:[],
    }
  }, 
  created(){
    this.years = this.getYears(2011);  
  },
  methods:{
    ...mapActions('news',{
      setNewsYear:'setNewsYear',
    }),
    onChange(){
      this.setNewsYear(this.selectedYear);
    },
    getYears(start){
      var options=[];
      var yyyy = new Date().getFullYear();
      for (let i = yyyy; i >= start; i--) { 
        options.push({value:i,label:i.toString()});
      }  
      return options;
    },
  }
}
</script>

