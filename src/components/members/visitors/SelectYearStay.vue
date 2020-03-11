<template>
  <div class="mx-0 px-0 custom-control custom-control-inline  ">
    <label class="mt-1 mr-2 " for="inputYear" ><span class="body-1">Select</span></label>
    <select id="inputYear" class=" custom-select body-1" v-model="selectedYear" @change="onChange()">
      <option v-for="(year,index) in years" :key="index" :value="year.value">{{year.label}}</option>
    </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
var yyyy = new Date().getFullYear();

export default {
  props:[],
   data(){
    return{ 
      selectedYear:yyyy,
      years:[],
    }
  }, 
  created(){
    this.years = this.getYears(2017);  
  },
  methods:{
    ...mapActions('visitors',{
     setVisitorsYear: 'setVisitorsYear',
    }),
    onChange(){
        this.setVisitorsYear(this.selectedYear);
    },
    getYears(start){
      var options = [];
      for (let i = yyyy; i >= start; i--) { 
        options.push({value:i,label:i.toString()});
      }  
      return options;
    },
  }
}
</script>

