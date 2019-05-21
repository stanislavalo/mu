<template>
  <v-card 
    max-width="260"
    min-width="260">
    <v-layout row class="pa-1 ">
      <v-flex xs8 >
        <v-card-title primary-title >
          <div class="ml-3 ">
            <h3 class="headline ma-0 pa-0"
                style="color:#252697">Institute of Mathematics</h3>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs4  class="mt-2 mr-5">
        <v-img
          :src="require('../../../assets/im-logo.gif')"
          min-height="80"
          max-height="80"
          contain>
        </v-img>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12>
        <p row class="p0 ml-3"
          style="color:#252697">of the Czech Academy of Sciences </p>
      </v-flex>
    </v-layout>
  </v-card>
</template>
  
  