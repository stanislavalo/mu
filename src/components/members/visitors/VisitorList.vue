<template>
  <v-card tile  elevation=3 min-width=100%>
    <v-layout row wrap>
      <v-flex xs6 sm6 md2 lg2 xl2>
        <div  class="ml-5">
        <p class=" title pb-1  mt-1 orange--text">{{visitor.year_academic_start}}/{{end}}</p>
        <span class="subheading font-weight-bold " v-html="visitor.first_name"></span>
        <p class=" title pb-1mt-1" v-html="visitor.last_name"></p>
        <p class=" mt-4 body-1">
          <a :href="visitor.url_homepage" class="perso">Personal webside</a>
        </p>
        </div>
      </v-flex>
      <v-flex xs6 sm6 md1 lg1 xl1>
        <v-img
          :src=photo
          :lazy-src=photo
          class="grey lighten-2"
          max-width="140px"
          max-height="180px"
        >
          <template v-slot:placeholder>
            <v-layout
              fill-height
              align-center
              justify-center
              ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-flex>
      <v-flex xs12 sm12 md9 lg9 xl9>
        <div  class="body-2 font-weight-regular mx-4 mt-1 justify" v-html=visitor.description></div>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
  props:['visitor'],
  data(){
    return {
      photo: "http://localhost:8080/src/data/photos/visitors/"+this.visitor.url_photo,
      end:parseInt(this.visitor.year_academic_start) + 1 -2000,
    };
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
    }),
  },
}
</script>
<style scoped>
a.perso{
   color:#0000cd; 
  }
.justify{
   text-align: justify
}
</style>


