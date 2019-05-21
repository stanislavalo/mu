<template>
  <v-layout
     xs12 md6  row wrap 
    class="hidden-lg-and-up" style="background: #252697;" >
    <v-flex xs12 class="menudown" 
      v-for="(itemMenu, index) in mainMenu" 
      :key="index" flat>
      <v-btn class="white--text" flat>{{itemMenu.name}}</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default{
  props: ['mainMenu'],
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
