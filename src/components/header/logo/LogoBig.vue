<template>
  <v-card flat
    max-width="260"
    min-width="260">
    <router-link :to="{name:'home'}" class="pa-1 address" tag="v-layout">
      <v-flex xs8 class="ml-0">
        <v-card-title class="ml-0 mr-1" >
          <div class="ml-0">
            <span class="headline headcolor ma-0 pa-0">Institute of Mathematics</span>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs4  class="mt-2 mr-2">
        <v-img
          :src="require('../../../assets/header/im-logo.gif')"
          min-height="80"
          max-height="80"
          min-width="60"
          contain>
        </v-img>
      </v-flex>
    </router-link>
    <v-layout wrap row class="mt-2 mb-0">
      <v-flex xs12 >
        <p row class="p-0 ml-4 ">
          <a href="http://www.avcr.cz/cs/" class="headcolor" target="_blanc">
          <span class="caption">of the</span> Czech Academy of Sciences 
          </a>
        </p>
      </v-flex>
    </v-layout>
    
  </v-card>
</template>
<style scoped>
.address{
  cursor: pointer;
}
.headcolor{
  color:#252697  
}
</style>
  
  