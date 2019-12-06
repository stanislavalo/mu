<template>
  <v-container grid-list-xl class="mx-0 px-0">
    <v-layout row class="mx-0 px-0">
    <v-flex xs12 class="mx-0 px-0">
      <v-sheet class="transparent mx-0 px-0 mt-2">
          <router-link :to="{name:'detail',params:{id:researcher.department[2]}}" >
            <h5 class=" orange--text">{{ $t("researchers.departement") }}: </h5>
            <h5 class="white--text ">{{researcher.department[language]}}</h5>
          </router-link>
      </v-sheet>
    </v-flex>
    </v-layout>
    <v-layout row>
    <v-flex xs3 xl1 class="orange--text text-uppercase">
      <p class="py-0">email:</p>
      <p class="py-0">phone:</p>
      <p class="py-0">office:</p>
      <p class="py-0">location:</p>
    </v-flex>
    <v-flex xs9 xl11 class="white--text">
      <p class="py-0">{{researcher.per_email}}</p>
      <p class="py-0">{{researcher.telephone}} </p>
      <p class="py-0">{{researcher.office}} </p>
      <p class="py-0">{{location}}</p>
    </v-flex>
    </v-layout>
  </v-container>  
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  props:['researcher','location'],
  computed: {
  ...mapGetters({
      language:'language',
    }),
  }
}
</script>

