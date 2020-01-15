<template>
  <section>
    <app-article v-if="type == 1" :year="year" :article="object_type"></app-article>
    <app-chapter v-else-if="type == 4" :year="year" :chapter="object_type"></app-chapter>
    <app-in-proceeding v-else-if="type == 3" :year="year" :inproceeding="object_type"></app-in-proceeding>
    <app-book v-else-if="type == 2" :year="year" :book="object_type"></app-book>
    <app-report v-else-if="type == 5" :year="year" :report="object_type"></app-report>
  </section>
</template>
<script>
import article from './Article.vue';
import chapter from './Chapter.vue';
import inproceeding from'./Inproceeding.vue';
import book from './Book.vue';
import report from './Report.vue';

export default {
  props:['type','year','object_type'],
  components:{
    AppArticle:article,
    AppChapter:chapter,
    AppInProceeding:inproceeding,
    AppBook:book,
    AppReport:report,
  }
}
</script>