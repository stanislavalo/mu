<template>
  <div class="mx-0 px-0 custom-control custom-control-inline  ">
    <label class="mt-1 mr-2 " for="inputYear" ><span class="body-1">Select</span></label>
    <select id="inputYear" class=" custom-select body-1" v-model="selectedYear" @change="onChange()">
      <option v-for="(year,index) in years" :key="index" :value="year.value">{{year.label}}</option>
    </select>
  </div>
  <!-- TODO Search conferences in BD -->  
</template>

<script>
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
  methods:{
    ...mapActions('conferences',{
      initConferences:'initConferences',
      setAllConferences:'setAllConferences',
      setConferencesYear: 'setConferencesYear',
    }),
    onChange(){
      if(this.selectedYear == 0)
        this.setAllConferences();
      else if (this.selectedYear == 2100)  
         this.initConferences();
      else   
        this.setConferencesYear(this.selectedYear);
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

