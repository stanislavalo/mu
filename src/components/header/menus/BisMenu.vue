<template>
  <v-layout :key="keyrand"
    align-end justify-end column fill-height
    class="my-0 py-0 ">
      <v-spacer></v-spacer>
      <ul class="nav navbar-nav hidden-sm-and-down" >
        <li  class="white--text px-3 "
              v-for="(itemMenu, index) in bisMenu" 
              :key="index" flat>
            {{itemMenu.name}} 
        </li>
      </ul>
  </v-layout>
</template>

<script>
export default{
  props: ['bisMenu','keyrand'],
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

