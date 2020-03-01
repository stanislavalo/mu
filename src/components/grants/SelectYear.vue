<template>
  <div class="mx-0 px-0 custom-control custom-control-inline  ">
    <label class="mt-1 mr-2 " for="inputYear" ><span class="caption">From</span></label>
    <select id="inputYear" class=" custom-select body-1" v-model="selectedYear" @change="onChange()">
      <option v-for="(year,index) in years" :key="index" :value="year.value">{{year.label}}</option>
    </select>
  </div>
  <!-- TODO Search publication in BD --> 
  
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props:[],
   data(){
    return{ 
      selectedYear: new Date().getFullYear()-2 ,
      years:[
        {value:2019,label:'2020'},
        {value:2019,label:'2019'},
        {value:2018,label:'2018'},
        {value:2017,label:'2017'},
        {value:2016,label:'2016'},
        {value:2015,label:'2015'},
        {value:2014,label:'2014'},
        {value:2013,label:'2013'},

      ],
    }
  }, 
  methods:{
    ...mapActions('grants',{
        setGrantsYear: 'setGrantsYear',
    }),
    onChange(){
      this.setGrantsYear(this.selectedYear);
    }

  }
}
</script>

