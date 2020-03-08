<template>
<v-container fluid>
  <v-layout>
    <v-flex xs12 lg12 xl12>
      <v-card   v-for="lecture in cechlectures" :key="lecture.id_cech_lecture"  :flat="!mdAndDown" >                                             
        <app-lecture-cech-pattern :date_lecture="lecture.date_lecture" class="hidden-md-and-up"></app-lecture-cech-pattern>
        <app-lecture-cech-description :lecture="lecture" class="hidden-md-and-up"></app-lecture-cech-description>
        <v-layout class="hidden-sm-and-down">
          <v-flex lg1 xl1 class="ml-3 mr-3" >
            <app-lecture-cech-pattern :date_lecture="lecture.date_lecture"></app-lecture-cech-pattern>
          </v-flex>
          <v-flex lg11 xl11>
            <app-lecture-cech-description :lecture="lecture"></app-lecture-cech-description>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-flex> 
  </v-layout>
</v-container>

</template>
<script>
import {mapGetters} from 'vuex';
import cechlectures from '../../../data/events/cechlectures.js'
import lectureCechPattern from './LectureCechPattern.vue';
import lectureCechDescription from './lactureCechDescription.vue';

export default {
  data(){
    return {
      cechlectures:cechlectures,
    }
  },
  components:{
    AppLectureCechPattern:lectureCechPattern,
    AppLectureCechDescription:lectureCechDescription,
  },
  computed:{
    ...mapGetters('header',{
      mdAndDown:'mdAndDown'
    }),
  },
}
</script>
