<template>
  <div :class="[typeclass,'body-1']">
    <div >
      <span v-for="(author,index) in publication.authors" :key="index" 
        :class="{'indigo--text text--darken-2':author.type}">
        {{author.name_last}} {{author.name_first}}
        <span v-if="index < publication.authors.length - 1">,</span></span> 
    </div>
    <div class="font-italic">{{publication.title.name}}</div>
    <app-article v-if="publication.type == 1" :year="publication.year" :article="publication.object_type"></app-article>
    <app-chapter v-else-if="publication.type == 4" :year="publication.year" :chapter="publication.object_type"></app-chapter>
    <app-in-proceeding v-else-if="publication.type == 3" :year="publication.year" :inproceeding="publication.object_type"></app-in-proceeding>
    <app-book v-else-if="publication.type == 2" :year="publication.year" :book="publication.object_type"></app-book>
    <app-report v-else-if="publication.type == 5" :year="publication.year" :report="publication.object_type"></app-report>
  </div> 
</template>
<script>
import article from './Article.vue';
import chapter from './Chapter.vue';
import inproceeding from'./Inproceeding.vue';
import book from './Book.vue';
import report from './Report.vue';

export default {
  props:['publication'],
  data(){
    return{
      typeclass:'type'+this.publication.type,
    }
  },
  components:{
    AppArticle:article,
    AppChapter:chapter,
    AppInProceeding:inproceeding,
    AppBook:book,
    AppReport:report
  },
}
</script>




 