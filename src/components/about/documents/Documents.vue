<template>
  <v-container fluid>
    <v-layout row wrap class="mb-2 mx-1">
    <v-flex xs12  class="headline blue--text text--darken-4 ">
      <span :class="{activedoc:!report}" @click="switchDocuments(1)">{{ $t("documents.title") }}</span>
        <span>&nbsp;/&nbsp;</span>
      <span :class="{activedoc:report}" @click="switchDocuments(0)">{{ $t("documents.report") }}</span>
      </v-flex>
    </v-layout>
    <app-reports-list v-if="report"></app-reports-list>
    <app-documents-list v-else></app-documents-list>

  </v-container>
</template>
<script>
import ReportsList from './ReportsList.vue';
import DocumentsList from './DocumentsList.vue';
export default {
  data(){
    return {
      report:false,
    }
  },
  components:{
    AppReportsList:ReportsList,
    AppDocumentsList: DocumentsList,
  },
  methods:{
    switchDocuments: function(id){
     if(id === 1)
       this.report = false;
  
     else if(id === 0)
      this.report = true;
    }
  }
}
</script>
<style>
.activedoc{
  border-bottom: 6px solid #8EA4D8;
}

</style>