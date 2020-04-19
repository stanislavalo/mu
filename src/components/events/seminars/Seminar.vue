<template>
    <app-seminar-page :seminar="seminar"></app-seminar-page>
</template>
<script>
import seminars from '../../../data/events/seminars/seminars.js';
import seminarPage from './SeminarPage.vue';

export default {
  data(){
    return{
     seminar:null,
     crumps: [],
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
    this.crumps.push({
          text: "home.title",
          disabled: false,
          href: 'home',
    }), 
    this.crumps.push({
          text: "events.seminars",
          disabled: false,
          href: 'seminars',
    }),  
    this.crumps.push({
          text: this.seminar.field_seminar_title_value,
          disabled: true,
          href: '' 
    });
  },
  components:{
    AppSeminarPage:seminarPage,
  }
}
</script>