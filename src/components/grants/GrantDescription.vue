<template>
  <v-layout row wrap >
    <v-flex xs12 pl-2>
      <v-img v-if="showIcon"
          :src="require('../../assets/grants/subtitles-24px.svg')"
          max-height="50"
          position="left"
          aspect-ratio="1.7"
          contain>
        <v-btn flat  color="orange" class="ml-1 pl-1 text-none" @click="setSeeDescription()" > 
          <span class="text-none orange--text ml-5 pl-1 ">Description </span>
          <img v-if="!toggleDown" class="ml-1" src="../../assets/departments/outline-expand_more-24px.svg">
          <img v-else class="ml-1" src="../../assets/departments/outline-expand_less-24px.svg">
        </v-btn>
      </v-img>
      <v-btn v-else flat  color="orange" class="ml-1 pl-1 text-none" @click="setSeeDescription()" > 
        <span class="text-none orange--text  ">Description </span>
        <img v-if="!toggleDown" class="ml-1" src="../../assets/departments/outline-expand_more-24px.svg">
        <img v-else class="ml-1" src="../../assets/departments/outline-expand_less-24px.svg">
      </v-btn>
      <p v-if="toggleDown" class=" pl-2 pr-1 text-justify" >
        <span v-html="description"></span>
      </p>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  props:['seeDescription','description','showIcon'],
  data(){
    return{
      toggleDown:this.seeDescription,
    }
  },
  computed:{
    ...mapGetters('grants',{
      typeGrantChanged:'typeGrantChanged',
      typeGrant:'typeGrant',
    }),
  },
  methods:{
    setSeeDescription() {
      this.toggleDown = !this.toggleDown;  
    }
  }
}
</script>