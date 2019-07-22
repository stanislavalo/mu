<template>
  <section>
    <div class="hidden-md-and-up ml-1 pb-1">
      <span class="font-weight-bold pl-1">Article</span>
        <app-publication-list-grants></app-publication-list-grants>
        <img src="../../assets/research/icon_repository.jpg" class="pl-1">
    </div>

    <div  class="hidden-sm-and-down ml-2 pl-1 font-weight-bold">Article </div>
    <div class=" ml-2 hidden-sm-and-down" >
      <app-publication-list-grants></app-publication-list-grants>
    </div>
    <div class="mt-1 ml-2 pl-1 hidden-sm-and-down">
      <img src="../../assets/research/icon_repository.jpg">
    </div>
  </section>  
</template>
<script>
import publicationListGrants from './PublicationListGrants.vue';
export default {
  components:{
    AppPublicationListGrants:publicationListGrants,
  }
}
</script>



