<template>
  <v-layout 
    xs12 md6 row wrap 
    class="hidden-lg-and-up" style="background: #252697;" >
    <v-flex  xs12  md3 class="menudown " 
      v-for="(itemMenu, index) in bisMenu" 
      :key="index" flat>
      <v-btn flat class=" white--text" style="text-transform: none !important;"  >{{itemMenu.name}}</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default{
  props: ['bisMenu'],
  data() {
    return {
      items:[],
    }
  },
  methods:{
    clickItem(items){ 
      this.items= items;
    },
  }
}
</script>


