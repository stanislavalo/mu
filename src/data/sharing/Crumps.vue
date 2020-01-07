<template>
  <v-layout row wrap class="mx-0 my-0 py-0">
    <v-flex xs12 class="mx-0 px-1 my-0 py-0">
      <span v-for="(item,index) in crumbsShape"  :key="index">
      <span v-if="item.disabled" class="caption grey--text text--darken-2 mx-0 px-0">{{item.text}}</span>
      <router-link v-else :to="{name:item.href,params:item.params}" class="body-1 blue--text text--darken-4 mx-0 px-0">
        {{$t(item.text)}}  
      </router-link>
      <span v-if="index != crumbsShape.length - 1" v-html="divider"></span>
      </span> 
    </v-flex>
  </v-layout>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  props:['crumbs'],
  data(){ return{
      crumbsShape:this.crumbs,
      divider:'&nbsp;&nbsp;/&nbsp;&nbsp;',
    }
  },
  created() {
    if(this.$vuetify.breakpoint.xsOnly){ 
      const filters = this.$options.filters;
      var crumbsShapeData=this.crumbs;
      crumbsShapeData.forEach(function(element){
        element.text = filters.shape(element.text,36);
      });
      this.crumbsShape = crumbsShapeData; 
    }
  },
}

</script>