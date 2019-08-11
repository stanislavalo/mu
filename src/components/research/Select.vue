<template>
<section>
  <form >
    <div class="form-row ">
      <div class="form-group col-md-2">
        <label for="inputYear">Year</label>
        <select id="inputYear" class="form-control" v-model="selectedYear">
          <option v-for="(year,index) in years" :key="index" :value="year.value">{{year.label}}</option>
        </select>
      </div>
      <div class="form-group col-md-2">
        <label for="inputDepartment">Departments</label>
        <select id="inputDepartment" class="form-control" v-model="selectedDepartment">
          <option v-for="(department,index) in departments" :key="index" :value="department.id">{{department.name}}</option>
        </select>
      </div>
      <div v-if="showType" class="form-group col-md-2">
        <label for="inputType">Type</label>
        <select id="inputType" class="form-control" v-model="selectedType">
          <option v-for="(type,index) in typePublication" :key="index" :value="type.id">{{type.name}}</option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label for="inputMembers">Members</label>
        <select id="inputMembers" class="form-control" v-model="selectedMember">
          <option v-for="(member, index) in  membersOptions" :key="index" :value="member.id">{{member.last_name}} {{member.first_name}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-secondary  mt-4 mb-2" 
        @click.prevent="submitted">Search</button>
      <div class="form-group col-md-4"></div>
    </div>
  </form>
  <!-- TODO Search publication in BD --> 
  <p v-if="isSubmitted" >
    Search {{typeProduction}} for :<br>
    id_member: {{this.selectedMember}}, <br>
    department:{{this.selectedDepartment}} <br>
    type: {{this.selectedType}} <br>
    year: {{this.selectedYear}} 
  </p>
  </section>
</template>

<script>
import members from '../../data/members';
import {mapActions} from 'vuex';
export default {
  props:['typePublication','showType','typeProduction'],
   data(){
    return{
      selectedYear:2019,
      selectedDepartment:0,
      selectedType:20,
      selectedMember:0,      
      isSubmitted:false,
      years:[
        {value:2019,label:'recent'},
        {value:0,label:'all'},
        {value:2100,label:'to appear'},
        {value:2019,label:'2019'},
        {value:2018,label:'2018'},
        {value:2017,label:'2017'},
        {value:2016,label:'2016'},
        {value:2015,label:'2015'}
      ],
      dep_year:[
        {
          year:0, 
          deps:[{id:0,name:'all'},{id:1,name:'AGMP'},{id:2,name:'BB'},{id:3,name:'DM'},{id:4,name:'CMMA'},
          {id:5,name:'EDE'},{id:6,name:'MLTCS'},{id:50,name:'Before 1970'}
          ], 
        },
        {
          year:2090, 
          deps:[{id:0,name:'all'},{id:2,name:'BB'},{id:4,name:'CMMA'},{id:5,name:'EDE'}], 
        },
        {
          year:2019, 
          deps:[{id:0,name:'all'},{id:1,name:'AGMP'},{id:2,name:'BB'},{id:4,name:'CMMA'},
          {id:5,name:'EDE'},{id:6,name:'MLTCS'}
          ], 
        },
        {
          year:2018, 
          deps:[{id:0,name:'all'},{id:1,name:'AGMP'},{id:4,name:'CMMA'},
          {id:5,name:'EDE'},{id:6,name:'MLTCS'}
          ], 
        },
        {
          year:2017, 
          deps:[{id:0,name:'all'},{id:1,name:'AGMP'},{id:4,name:'CMMA'},
          {id:5,name:'EDE'},
          ], 
        },
        {
          year:2016, 
          deps:[{id:0,name:'all'},{id:1,name:'AGMP'},{id:4,name:'CMMA'},
          {id:5,name:'EDE'},
          ], 
        },
        {
          year:2015, 
          deps:[{id:0,name:'all'},{id:1,name:'AGMP'},{id:3,name:'DM'},{id:4,name:'CMMA'},
          {id:5,name:'EDE'},
          ], 
        },
      ],
      members:members,
    }
  },
  computed: {
    getShowType(){ 
      if(this.typeProduction =='productions')
       this.showType = true;
    },
    departments(){
      var departmentsOptions= [];
      this.selectedDepartment = 0;
      this.dep_year.forEach(element => {
        if(this.selectedYear == element.year){
            element.deps.forEach(item => {
            departmentsOptions.push(item);
            });
        }
      });  
      return departmentsOptions; 
    },
    membersOptions(){
     var optionsMembers = [{id:0,last_name:"all",first_name:''}];
     this.selectedMember=0;
     //var optionsMembers=[];
      this.members.forEach(element =>{
        if(element.type.researcher === false){
          return;
        }
        if( this.selectedDepartment == 0 
            || (element.typeResearcher.departmentId == this.selectedDepartment 
              && (element.typeResearcher.from <= this.selectedYear
              )
            )
            || ( element.typeResearcherHistory && 
            isHistoDepartment(element.typeResearcherHistory,this.selectedYear,this.selectedDepartment))
          )
        { 
          optionsMembers.push(element);
        }
      })
      return optionsMembers;
    }
  },
  methods:{
    ...mapActions({
        setSearchCriterias: 'setSearchCriterias',
    }),
    submitted(){
      this.isSubmitted = true;
      var criterias={};
      criterias.selectedYear= this.selectedYear;
      criterias.selectedDepartment = this.selectedDepartment;
      criterias.selectedType = this.selectedType;
      criterias.selectedMember = this.selectedMember;
      this.setSearchCriterias(criterias);
    }
  }
}

function isHistoDepartment(histo,year,department){
  var memberDepartment = false;
  histo.forEach(element => {
    if(element.departmentId == department && element.from<= year && element.to >= year){
      memberDepartment = true;
      return;
    }
  });
  return memberDepartment;
}
</script>

