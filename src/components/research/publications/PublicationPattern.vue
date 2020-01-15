<template>
  <section>
    <div :class="['hidden-md-and-up', 'ml-1', 'pb-1']">
      <span class="font-weight-bold pl-1">{{listTypePublication[publication.type]}} </span>
      <app-preprint-pattern v-if="publication.type == 6" 
        :url_preprint="publication.url_preprint"
        :date_preprint="publication.date_preprint" 
        :registrat_num="publication.registrat_num"
        :imagepdf=false>
      </app-preprint-pattern> 
      <app-production-list-grants v-if="publication.grants" 
        :grants="publication.grants" :imageGrant=false>
      </app-production-list-grants>
      <a v-if="publication.url_repository" :href="publication.url_repository" target="_blanc">
        <p class="black--text caption font-weight-medium repository ">Repository</p>
      </a>
    </div>
    <div  class="hidden-sm-and-down ml-2 pl-1 font-weight-bold">{{listTypePublication[publication.type]}} </div>
    <div class=" ml-2 hidden-sm-and-down" >
      <app-preprint-pattern v-if="publication.type == 6" 
        :url_preprint="publication.url_preprint"
        :date_preprint="publication.date_preprint" 
        :registrat_num="publication.registrat_num"
        :imagepdf=true>
      </app-preprint-pattern>  
      <app-production-list-grants v-if="publication.grants" 
        :grants="publication.grants" :imageIcon=true>
      </app-production-list-grants>
    </div>
    <div  v-if="publication.url_repository" class="mt-1 ml-2 pl-1 hidden-sm-and-down">
      <a :href="publication.url_repository">
        <img src="/src/assets/research/icon_repository.jpg">
      </a>
    </div>
  </section>  
</template>
<script>
import productionListGrants from '../ProductionListGrants.vue';
import preprintPattern from './preprints/PreprintPattern.vue';
import {mapGetters} from 'vuex';
export default {
  props:['publication'],
  components:{
    AppProductionListGrants:productionListGrants,
    AppPreprintPattern:preprintPattern,
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




