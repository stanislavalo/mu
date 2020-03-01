<template>
  <div>
    <v-flex xs12>
      <h3 class="title font-weight-bold orange--text mt-3 mb-1">{{ $t("researcher.interests") }}: </h3>
    </v-flex>
    <v-layout wrap v-for="(item, index) in interest" :key="'l'+index">
      <v-flex xs2 sm2 md2 v-if="mdAndDown"  align-center justify-start :key="index">
          <img src="../../../assets/members/circle.png">
      </v-flex>
      <v-flex xs12 sm10 md10 lg12 xl12 :key="'a'+index">
        <div class="pa-3 v-card v-sheet theme--light my-0 ml-1">
          <h3 class="subheading font-weight-bold">{{item.title}}</h3>
          <div>{{item.description}}</div>
        </div>
      </v-flex>
    </v-layout>
    <v-layout wrap>
      <v-flex  class="text-xs-start ma-0 pl-2">
          <v-btn class="v-btn orange primary">
            <v-content >
              download cv
            </v-content>
          </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  props:['interest'],
}
</script>