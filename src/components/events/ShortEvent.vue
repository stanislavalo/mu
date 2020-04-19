<template>
  <container>
    <v-layout xs12 sm12 md12 lg12 xl12 row v-for="(event, index) in events"  :key="index">
      <v-flex xs2 sm2 md2 lg2 xl1 :class="[!smAndDown ? 'mr-4' : 'mr-2']" >
        <router-link :to="{name:event.url}" tag="div" :class="[!smAndDown ? 'px-2' : 'px-1','text-center','date-bg' ]"> 
              <a class="white--text">{{event.datetime.day}}<br> {{event.datetime.month}}</a>
        </router-link>
      </v-flex>
      <v-flex> 
        <router-link :to="{name:event.url}" tag="p" class="subtitle-1 font-weight-bold mb-0 ">
          <a class="subtitle-1 font-weight-bold blue--text text--darken-4">{{event.title}}</a>
        </router-link>
        <p class="text-justify"> {{event.text}} <br>
          {{event.datetime.day}} {{event.datetime.month}}  
          {{event.datetime.hh}}h<span v-if="event.datetime.mm>0">{{event.datetime.mm}}</span>
          <span v-else>00</span>
        </p>
      </v-flex>
    </v-layout>
  </container>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      events:[
        {
          datetime:{
            day:23,
            month:'SEP',
            year:2019,
            hh:9,
            mm:30
          },
          title:'Meeting Dresden-Prague-Wroclaw',
          text:'The meeting will be in Prague on 25th-27th September 2019. Its goal is starting collaboration about research centers in Dresden, Prague and Wroclaw.',
          url:'workshop',
        },
        {
          datetime:{
            day:27,
            month:'SEP',
            year:'2019',
            hh:9,
            mm:0,
          },
          title:'Modelling of multicomponent diffusion in porous media using the Maxwell-Stefan theory and continuum mechanics',
          text:'Jiří Mikyška, Czech Technical University, seminar: Current Problems in Numerical Analysis',
          url:'calendar',
        },
        {
          datetime:{
            day:10,
            month:'OCT',
            year:2019,
            hh:10,
            mm:0
          },
          title:'Seminar on differential equations and integration theory - Special session in honor of the 75th birthday of Milan Tvrdý',
          text:'The meeting is organized on the occasion of the jubilee celebrated by our esteemed colleague Milan Tvrdý.',
          url:'calendar',
        }
      ]
    }
  },
  computed: {
    ...mapGetters('header',{
        smAndDown:'smAndDown',
    }),
  },
}
</script>
<style scoped>
 .date-bg{
   background: #252697
 }
</style>