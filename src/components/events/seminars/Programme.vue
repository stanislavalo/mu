<template>
 <v-flex xs12 >
  <v-card v-for="(programme, index) in programmes" :key="index" class="mx-0 my-2" width="100%">
    <v-card-title >  
      <div>
        <span class="subheading font-weight-bold  mx-0 mt-1">
          {{programme.title}}
        </span>
        <p class="orange--text text--darken-3 mt-1">{{programme.speaker}}</p>
        <p class="body-2 font-weight-regular ml-0  grey--text text--darken-2"> {{programme.affiliation}} </p>
        <p class="date pl-1 body-2 mt-1">{{programme.date_from | dateEU('dddd, DD.MMMM YYYY - HH:mm')}} to 
          {{programme.date_to | dateEU('HH:mm')}} 
        <p class=" date body-2 font-weight-regular pl-1  grey--text text--darken-2">
        {{programme.place}}
        </p>
        <div  v-if="getAllText(index)" v-html="programme.text"
          class="justify body-2 font-weight-regular ml-0 mt-1 mr-2 black--text"> 
        </div> 
        <app-text-programme-more v-else :textMore="programme.text" ></app-text-programme-more>
      </div> 
    </v-card-title>
  </v-card>
 </v-flex>
</template>
<script>
import complexity2019 from '../../../data/events/seminars/complexity2019.js';
import textProgrammeMore from './TextProgrammeMore.vue';
export default {
  props:['entity_id'],
  data(){
    return{
      ie:false,
      programmes:complexity2019,
      text1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };
  },
  created(){
    if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){ 
      this.ie = true;
    }
  },
  components:{
    AppTextProgrammeMore:textProgrammeMore,
  },
  methods:{
    getAllText(index){
      if(index == 0 || this.ie)
        return true;
      else
        return false;  
    }
  }
}
</script>
<style scoped>
.justify {
  text-align: justify;
}
.date{
  border-left-color: orange;
  border-left-width: 2pt;
  border-left-style:groove;
}
.read-more-button{
  margin-top: 0em  !important;
  padding-top: 0.1em !important;
}
</style> 