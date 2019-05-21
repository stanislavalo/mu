<template>
 <v-layout wrap  style="background: #252697;">
    <v-spacer></v-spacer>
    <div style="background:#3949AB">
      <v-btn icon small class="mx-0 pa-0 " color="white">
        <v-img class="mx-0"
          :src="require('../../../assets/baseline-perm_identity-24px.svg')"
          min-height="24"
          max-height="24"
          contain>
        </v-img>
      </v-btn>  
      <v-btn icon small class="mr-3 pa-0 ">
        <v-img class="mx-0"
          :src="require('../../../assets/lang1.gif')"
          min-height="13"
          max-height="13"
          contain>
        </v-img>
      </v-btn> 
    </div> 
  </v-layout>
</template>