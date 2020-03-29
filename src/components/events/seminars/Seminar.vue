<template>
   <v-container fluid>
    <app-seminar-page :seminar="seminar"></app-seminar-page>
   </v-container>
</template>
<script>
import seminars from '../../../data/events/seminars/seminars.js';
import seminarPage from './SeminarPage.vue';

export default {
  data(){
    return{
     seminar:null,
    };
  },
  created(){
    var id_seminar = this.$route.params.id;
    var seminarData= null;
    seminars.forEach(function(element){
      if(element.entity_id == id_seminar){
        seminarData=element;
      }
    });
    this.seminar = seminarData;
  },
  components:{
    AppSeminarPage:seminarPage,
  }
}
</script>