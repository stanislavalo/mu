<template>
  <v-layout row wrap class="mx-2">
       <app-list :pastList=false :list="last" class="mt-2"></app-list>
      <app-list :pastList=true :list="past" class="mt-0"></app-list>
    </v-layout>
</template>
<script>
import annuels from '../../../data/about/documents/ann_reports.js';
import annuelFiles from '../../../data/about/documents/ann_reports_fichiers.js';
import list from './List.vue';
export default {
  data(){
    return{
      annuels:annuels,
      annuelFiles:annuelFiles,
      last:null,
      past:null,
      docurl:null,
      pastList:false,
    }
  },
  components:{
    appList:list,
  },
  created(){
    var l=[];
    var p = [];
    var i=0;
    annuels.forEach(function(value){
      i++;
      if(i<4)
        l.push(value);
       else
       p.push(value) ;
    });
    this.last = l;
    this.past = p;
  },
  methods:{
    geturl(id){
      var filename = null;
      annuelFiles.forEach(function(value){
        if(value.id_rapport == id)
          filename = value.url_fichier;
      });
      if(filename)
        this.docurl='http://www.math.cas.cz/fichier/ann_rapports/'+filename;
    }
  }
}
</script>