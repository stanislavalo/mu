<template>
  <section>
    <div :class="['hidden-md-and-up', 'ml-1', 'pb-1']">
      <span v-if="publication.type!=8" class="font-weight-bold pl-1">{{listTypePublication[publication.type]}}</span>
      <app-preprint-pattern v-if="publication.type == 6" :preprint="preprint" :icon=false></app-preprint-pattern> 
      <app-thesis-pattern v-if="publication.type==7" :thesis="thesis" :icon=false></app-thesis-pattern>
      <app-lecture-pattern v-if="publication.type==8" :lecture="lecture" :icon=false></app-lecture-pattern>
      <app-production-list-grants class="ml-1" v-if="publication.grants" :grants="publication.grants" :icon=false></app-production-list-grants>
      <a v-if="publication.url_repository" :href="publication.url_repository" target="_blanc">
        <p class="black--text caption font-weight-medium repository ml-1">Repository</p>
      </a>
    </div>
    <div  class="hidden-sm-and-down ml-2 pl-1 font-weight-bold">{{listTypePublication[publication.type]}} </div>
    <div class=" ml-2 hidden-sm-and-down" >
      <app-preprint-pattern v-if="publication.type == 6" :preprint="preprint" :icon=true></app-preprint-pattern> 
      <app-thesis-pattern v-if="publication.type==7" :thesis="thesis" :icon=true></app-thesis-pattern> 
      <app-lecture-pattern v-if="publication.type==8" :lecture="lecture" :icon=true></app-lecture-pattern>
      <app-production-list-grants v-if="publication.grants" :grants="publication.grants" :icon=true></app-production-list-grants>
    </div>
    <div  v-if="publication.url_repository" class="mt-1 ml-2 pl-1 hidden-sm-and-down">
      <a :href="publication.url_repository">
        <img src="../../../assets/research/icon_repository.jpg">
      </a>
    </div>
  </section>  
</template>
<script>
import productionListGrants from '../ProductionListGrants.vue';
import preprintPattern from './preprints/PreprintPattern.vue';
import thesisPattern from './thesis/ThesisPattern.vue';
import lecturePattern from './lectures/LecturePattern.vue';
import {mapGetters} from 'vuex';
export default {
  props:['publication'],
  data() {
    return {
      thesis:{
        url:this.publication.url,
        year_start:this.publication.year_start,
        department:this.publication.department,
      },
      preprint:{
        url_preprint:this.publication.url_preprint,
        date_preprint:this.publication.date_preprint,
        registrat_num:this.publication.registrat_num,
      },
      lecture:{
        filepdf:this.publication.filepdf,
        month:this.publication.month,
        year:this.publication.year,
      }
    }
  },
  components:{
    AppProductionListGrants:productionListGrants,
    AppPreprintPattern:preprintPattern,
    AppThesisPattern:thesisPattern,
    AppLecturePattern:lecturePattern,
  },
  computed: {
    ...mapGetters('publication',{
      listTypePublication:'listTypePublication' ,
    }),
  },
}
</script>
<style scoped>
.repository{
  text-decoration-line: underline;
  text-decoration-style: solid;
}
</style>




