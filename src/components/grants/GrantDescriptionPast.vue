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
          <img v-if="!toggleDown1" class="ml-1" src="../../assets/departments/outline-expand_more-24px.svg">
          <img v-else class="ml-1" src="../../assets/departments/outline-expand_less-24px.svg">
        </v-btn>
      </v-img>
      <v-btn v-else flat  color="orange" class="ml-1 pl-1 text-none" @click="setSeeDescription()" > 
        <span class="text-none orange--text  ">Description </span>
        <img v-if="!toggleDown1" class="ml-1" src="../../assets/departments/outline-expand_more-24px.svg">
        <img v-else class="ml-1" src="../../assets/departments/outline-expand_less-24px.svg">
      </v-btn>
      <span>{{typeGrantChanged}} {{typeGrant}}</span>
      <p v-if="toggleDown1" class=" pl-2 pr-1 text-justify" >
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
      toggleDown1:this.seeDescription,
    }
  },
  computed:{
    ...mapGetters('grants',{
      typeGrantChanged:'typeGrantChanged',
      typeGrant:'typeGrant',
    }),
  },
  created(){
    this.toggleDown1 = false;
    console.log("created toggleDown1= "+this.toggleDown1);
  },
  mounted(){
    this.toggleDown1 = false;
    console.log(" mounted toggleDown1= "+this.toggleDown1);
  },
  beforeUpdate(){
    
     //this.toggleDown1 = false;
    console.log("before update toggleDown1= "+this.toggleDown1);
  },
  updated(){
   
    //this.toggleDown1YES = true;
    // console.log(" updated toggleDown1YES= "+this.toggleDown1YES);
    console.log(" updated toggleDown1= "+this.toggleDown1);

  },
  beforeDestroy(){
    this.toggleDown1 = false;
    console.log("before Destroy toggleDown1= "+this.toggleDown1);
  },
  destroyed(){
    this.toggleDown1 = false;
    console.log("destroyed toggleDown1= "+this.toggleDown1);
  },
  methods:{
    setSeeDescription() {
      this.toggleDown1 = !this.toggleDown1;  
      console.log("setSeeDescription toggleDown1= "+this.toggleDown1);
    }
  }
}
</script>