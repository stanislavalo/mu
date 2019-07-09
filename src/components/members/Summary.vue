<template>
<v-container class="mx-2" >
  <v-layout row wrap class="mb-2">
    <v-flex xs12>
      <span class="headline blue--text text--darken-4 ">{{ $t("summary.title") }}</span>
    <button type="button" class="btn btn-small btn-outline-dark mx-4" 
      @click="summary=all">
      All
    </button>
    </v-flex>
    <v-flex xs12 mt-2>
      <button type="button" class="btn  btn-outline-dark mx-1"
        v-for="(item,index) in groupAlphabet"
        :key="index"
        @click="getSummary(item.select)" >
        {{item.showLetters}}
      </button>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12>
     <div class="row summary my-2" v-for="(item, index) in summary" :key="index" >
        <div class="col-sm-3 title pb-1">{{item.last_name}}
          <span class="subheading font-weight-bold">{{item.first_name}}</span>
        </div>
        <div class="col-sm-3">{{item.telephone }}</div>
        <div class="col-sm-5">{{item.per_email}}</div>
        <div class="col-sm-1" >Office:&nbsp;
          <span class="font-weight-bold">{{item.office}}</span>
        </div>
      </div>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
// import data

import members from '../../data/members';
export default {
  data(){
    return {
      summary:[],
      all:[],
      groupAlphabet:[
        {id:1,showLetters:'A - E',select:'abcde',},
        {id:2,showLetters:'F - H',select:'fgh'},
        {id:3,showLetters:'I - O',select:'ijklmno'},
        {id:4,showLetters:'P - S',select:'pqrs'},
        {id:5,showLetters:'T - Z',select:'tuvwxyz'},
      ]
    }
  },
  created: function() {
    var summaryData = [];
    members.forEach(function(element) {
      if(element.status.activ && element.type.researcher){
        summaryData.push(element);
      }
    });
    this.summary = summaryData;
    this.all = this.summary;
  },
  methods:{
    getSummary(itemSelect){
      var summaryData = [];
      var letter = '';
      
      this.all.forEach(function(element) {
      letter = element.en_name.substring(0,1).toLowerCase();
      if(itemSelect.includes(letter)){
        summaryData.push(element);
      }
    });
      this.summary = summaryData;
    }
  }
}
</script>
<style>
div.summary{
  border-bottom: 3px solid rgba(224,224,224, 0.6);
  

}
 
</style>
