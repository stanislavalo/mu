<template>
  <v-card tile  elevation=2 min-width=100%>
    <v-layout row wrap>
      <v-flex xs12 sm12 md2 lg2 xl2>
        <div  class="ml-4 mb-2">
        <span class="subheading font-weight-bold" v-html="visitor.first_name"></span>
        <p class=" title mb-1" v-html="visitor.last_name"></p>
        <p v-if="title" class="body-2 font-weight-regular">{{title}} </p>
        <p class="body-1">
          <a   v-if="visitor.per_url" :href="visitor.per_url" class="perso" >Personal webside</a>
          <a v-if="visitor.per_email" :href="'mailto:'+visitor.per_email" class="per">
          <svg style="width:20px;height:20px" viewBox="0 0 24 28">
            <path fill="currentColor" d="M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z" />
          </svg>
        </a>
        </p>
        </div>
      </v-flex>
      
      <v-flex xs12 sm12 md10 lg10 xl10>
        <div  v-if="visitor.affiliation" class="body-2 font-weight-bold mx-4 mt-1 justify" >Afiiliation:
          <span v-html="visitor.affiliation" class="font-weight-regular"></span>
          ,&nbsp;<span v-if="visitor.city" v-html="visitor.city">
          ,&nbsp;<span v-if="visitor.country" v-html="visitor.country">
        </div>
        <div v-if="visitor.research_interst"  class="body-2  mx-4 mt-1 justify" >
          Research interests: 
          <span v-html="visitor.research_interst" class="font-weight-regular"></span>
        </div>
        <div  class="body-2 font-weight-bold mx-4 mt-1 justify">
          {{visitor.sigle_equipe}}:
          <span class="font-weight-regular">{{visitor.start| dateEU('DD/MM/YYYY')}} 
            to {{visitor.end| dateEU('DD/MM/YYYY')}}</span>
        </div>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  props:['visitor'],
  data(){
    return {
      photo: "http://localhost:8080/src/data/photos/visitors/"+this.visitor.url_photo,
      end:parseInt(this.visitor.year_academic_start) + 1 -2000,
      title:this.visitor.titre,
    };
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
    }),
  },
}
</script>
<style scoped>
.perso{
   color:#0000cd;
  }
.per{
  color:gray;
} 
.justify{
   text-align: justify
}
</style>


