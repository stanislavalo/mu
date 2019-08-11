<template>
  <section :class="typeclass">
    <div :class="['hidden-md-and-up', 'ml-1', 'pb-1']">
      <span class="font-weight-bold pl-1">{{listTypePublication[publication.type]}}</span>
        <app-production-list-grants v-if="publication.grants" :grants="publication.grants"></app-production-list-grants>
        <a v-if="publication.url_repository" :href="publication.url_repository">
          <img  src="../../../assets/research/icon_repository.jpg" class="pl-1">
          </a>
    </div>

    <div  class="hidden-sm-and-down ml-2 pl-1 font-weight-bold">{{listTypePublication[publication.type]}}</div>
    <div class=" ml-2 hidden-sm-and-down" >
      <app-production-list-grants v-if="publication.grants" :grants="publication.grants"></app-production-list-grants>
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
export default {
  props:['publication','listTypePublication'],
  components:{
    AppProductionListGrants:productionListGrants,
  }
}
</script>




