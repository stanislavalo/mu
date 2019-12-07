<template>
<section>
  <form class="body-1">
    <div class="form-row my-0 py-0">
      <div class="form-group col-md-2 my-0 py-0">
        <label class="mt-0 py-0" for="inputYear">From</label>
        <select id="inputYear" class="form-control body-1 mt-0" v-model="selectedYear">
          <option v-for="(year,index) in years" :key="index" :value="year.value">{{year.label}}</option>
        </select>
      </div>
    </div>
  </form>
  <!-- TODO Search publication in BD --> 
  <p v-if="isSubmitted" >
    Search grants for :<br>
    year: {{this.selectedYear}} 
  </p>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props:[],
   data(){
    return{ 
      selectedYear: new Date().getFullYear()-2 ,
      years:[
        {value:2019,label:'2019'},
        {value:2018,label:'2018'},
        {value:2017,label:'2017'},
        {value:2016,label:'2016'},
        {value:2015,label:'2015'}
      ],
      years:[
        {value:2019,label:'2019'},
        {value:2018,label:'2018'},
        {value:2017,label:'2017'},
        {value:2016,label:'2016'},
        {value:2015,label:'2015'}
      ],
      
    }
  },
  
  methods:{
    ...mapActions({
        setSearchCriterias: 'setSearchCriterias',
    }),
    submitted(){
      this.isSubmitted = true;
      var criterias={};
      this.setSearchCriterias(criterias);
    }
  }
}
</script>

