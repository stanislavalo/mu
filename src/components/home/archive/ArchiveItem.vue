<template>
  <v-card >
    <v-layout row wrap  :class="{'mx-1':!smAndDown,'mx-0':smAndDown}">
      <v-flex xs12 lg2 xl2 v-if="urlImage">
        <v-img v-if="smAndDown" 
         :src="urlImage"
         max-height="300px"
         aspect-ratio="1.7" contain>
        </v-img>
        <v-img v-else
         :src="urlImage"
         max-height="280px"
        >
        </v-img>
        
      </v-flex>
      <v-flex xs12 lg10 xl10 v-if="urlImage">
        <v-card-title primary-title>
          <div>
            <div class="title" v-html="item.title"></div>
            <div v-html="item.description" class="justify"></div>
            <div v-if="item.files" class="mt-2">
              <a v-for="(file, index) in item.files" :key="index" class="pr-2" 
                :href="file.url" target="_black">
                <span v-html="file.title" class="purple--text text--darken-4"></span>
                  <img src="../../../assets/research/acrobat_icon.png"><br v-if="smAndDown"/>
                
              </a>
            </div>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs12 v-else>
        <v-card-title primary-title>
          <div>
            <div class="headline" v-html="item.title"></div>
            <div v-html="item.description" class="justify"></div>
            
            <div v-if="item.files">
              <span v-for="(file, index) in item.files" :key="index">
                <img src="../../../assets/research/acrobat_icon.png">
              </span>
            </div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
    
    <v-divider light></v-divider>
  </v-card>
     
</template>
<script>
import {mapGetters} from 'vuex';                   
export default {
  props:['item'],
  data(){
    return {
      urlImage:null,
    }
  },
  created(){
    if(this.item.slices)
      this.urlImage = "http://www-test.math.cas.cz/data/photos/news/2019/"+this.item.slices[0].src;
  },
  computed:{
    ...mapGetters('header',{
      smAndDown:'smAndDown'
    })
  },
}
</script>
<style scoped>
 /* img {
  max-width: 100%;
  height: auto;
  } */
  .justify{
   text-align: justify !important; 
  }
</style>