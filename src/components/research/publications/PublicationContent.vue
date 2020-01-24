<template>
  <div class="body-1">
    <app-authors-title :authors="publication.authors" :title="publication.title"></app-authors-title>
    <app-basic-publication  :type="publication.type" :year="publication.year" :object_type="publication.object_type"></app-basic-publication> 
    <app-preprint v-if="publication.type == 6" :preprint="publication"></app-preprint>
    <app-thesis v-if="publication.type==7" :supervisor="publication.supervisor" :defence="publication.defence"></app-thesis>
  </div> 
</template>
<script>
import basicPublications from './BasicPublications.vue';
import preprint from './preprints/PreprintContent.vue';
import thesis from './thesis/ThesisContent.vue';
import authorsTitle from './AuthorsTitle.vue';

export default {
  props:['publication'],
  components:{
    AppBasicPublication:basicPublications,
    AppPreprint:preprint,
    AppThesis:thesis,
    AppAuthorsTitle:authorsTitle,
  },
}
</script>




 