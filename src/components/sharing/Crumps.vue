<template>
  <v-layout row wrap class="mx-0 my-0 py-0">
    <v-flex xs12 class="mx-0 px-1 my-0 py-0">
      <span v-for="(item,index) in crumpsShape"  :key="index">
      <span v-if="item.disabled" class="caption grey--text text--darken-2 mx-0 px-0">{{item.text}}  </span>
      <span v-else-if="item.disableTranslated" class="caption grey--text text--darken-2 mx-0 px-0">
        {{$t(item.text)}} {{item.textAdded}}
      </span>
      <router-link v-else :to="{name:item.href,params:item.params}" class="body-1 blue--text text--darken-4 mx-0 px-0">
        {{$t(item.text)}}  {{item.textAdded}}
      </router-link>
      <span v-if="index != crumpsShape.length - 1" v-html="divider"></span>
      </span>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props:['crumps'],
  data(){ return{
      crumpsShape:this.crumps,
      divider:'&nbsp;&nbsp;/&nbsp;&nbsp;',
    }
  },
  created() {
    if(this.$vuetify.breakpoint.xsOnly){ 
      const filters = this.$options.filters;
      var crumpsShapeData=this.crumps;
      crumpsShapeData.forEach(function(element){
        element.text = filters.shape(element.text,36);
      });
      this.crumpsShape = crumpsShapeData; 
    }
  }
}

</script>