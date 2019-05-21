<template>
  <v-card 
    max-width="300"
    min-width="300"
    max-height="96">
    <v-layout row class="pa-1 ">
      <v-flex xs9 >
        <v-card-title primary-title >
          <div class="ml-2 ">
            <h4 class=" ma-0 pa-0"
                style="color:#252697">Institute of Mathematics</h4>
                <p row class="pt-2 "
          style="color:#252697; font-size:11px ">of the Czech Academy of Sciences </p>
          </div>
        </v-card-title>
      </v-flex>
      <v-flex xs2  class="mt-2 ml-0 pl-0">
        <v-img
          :src="require('../../../assets/im-logo.gif')"
          min-height="50"
          max-height="50"
          contain>
        </v-img>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout> 
  </v-card>
</template>
