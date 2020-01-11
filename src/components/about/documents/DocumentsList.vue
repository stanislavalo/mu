<template>
  <v-layout row wrap class="mx-2">
      <v-flex xs12>
      <div class="my-2" v-for="(item, index) in documents" :key="index" >
          <a :href="docurl" target="_blanc" @click="geturl(item.id_rapport)" class="black--text">
            <div class=" pb-1" >
              <span class="title"> {{item.title}}</span>
              <span class="body-2 blue--text text--darken-4 pl-1">Download PDF</span>
              <p v-if="item.commentaire" class="subheading">{{item.commentaire}}</p>
            </div>
          </a>
      </div>
      </v-flex>
    </v-layout>
</template>
<script>
import documents from '../../../data/about/documents/doc_rapports.js';
import documentsFiles from '../../../data/about/documents/doc_rapports_fichiers.js';
export default {
  data(){
    return{
      documents:documents,
      documentsFiles:documentsFiles,
      docurl:null
    }
  },
  methods:{
    geturl(id){
      var filename = null;
      documentsFiles.forEach(function(value){
        if(value.id_rapport == id)
          filename = value.url_fichier;
      });
      if(filename)
        this.docurl='http://www.math.cas.cz/fichier/doc_rapports/'+filename;
    }
  }
}
</script>
<style scoped>
.pdf{
  color: #8EA4D8;
}
</style>