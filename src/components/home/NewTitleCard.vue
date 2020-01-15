<template>
  <v-card-title class="mx-0 px-0 my-0 py-0">
    <div class="my-0 pb-0">
        <v-img v-if="getImg(item.slices,item.isFirst)" class="mb-2"
            :src="item.slices[0]" 
            :max-height="maxHeightImg(detail)"
            aspect-ratio="1.9">
        </v-img> 
        <v-carousel v-if="getCarousel(item.slices,item.isFirst)" :height="maxHeightImg(detail)" class="mb-2">
          <v-carousel-item
            v-for="(slice,i) in item.slices"
            :key="i"
            :src="slice.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
          </v-carousel-item>
        </v-carousel>
        <p  :class="[{'px-1':!mdAndDown},{'title':item.isFirst},{'subheading':!item.isFirst},
            'py-0','my-0','indigo--text',{'font-weight-black':!item.isFirst }]">
            <!-- {'font-weight-black':!item.isFirst } -->
          {{item.title}}</p>
        <div v-if="getIsFirst(item.isFirst)"  :class="[{'px-1':!mdAndDown},'py-2','black--text','text-justify']">{{item.description}}
          <router-link :to="{name:getUrl(l)}" tag="p" class="pt-1 pb-1 my-0 url" v-for="(l,index) in item.links"  :key="index"> 
              <a>{{l.text}}</a> 
          </router-link>
        </div>
        <p v-if="!item.isFirst" class="mt-2 mb-0 text-justify grey--text text--darken-2 pl-1 py-0" >Short text: Lorem ipsum dolor sit 
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        </p>
        <p v-if="!item.slices" class="mt-0 pt-0  text-justify grey--text text--darken-2 pl-1 py-0" >Short text1: Lorem ipsum dolor sit 
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        </p>
        <p :class="[{'mt-2':!mdAndDown}, 'custom-transform-class',  'grey--text',  'pl-1']"  >{{item.short}}</p>
    </div>
  </v-card-title>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  props:['item','getIsFirst','detail'],
  computed: {
    ...mapGetters('header',{
        language:'language',
        mdAndDown:'mdAndDown',
    })
  },
  methods:{
    getUrl(l){
      return l.url;
    },
    getImg(slices,first) {
      if (slices === null)
        return false
      else if(first && slices.length == 1)
        return true
      else if(slices.length && !first && !this.mdAndDown)
        return true;
      else
        return false;
    },
    getCarousel(slices,first){
      if (slices === null)
        return false
      else if(first && slices.length > 1)
        return true;
      else 
        return false;
    },
    maxHeightImg(detail){
      if(this.$vuetify.breakpoint.lg){
        if(detail){
          return 420;
        }
        else
          return 340;
      }
        
      else if(this.mdAndDown)  
        return 'auto'
      else if(this.$vuetify.breakpoint.xl){
        if(detail){
          return 600;
        }
        else{
          return 400;
        }
      }
      else
        return auto
        
    },
    maxHeightImg1(){
      if(this.$vuetify.breakpoint.lg)
        return 240
      if(this.mdAndDown)  
        return 'auto'
      else
        return 200
    }          
    
  }
}
</script>