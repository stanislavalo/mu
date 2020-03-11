<template>
  <v-container fluid>
    <v-layout row wrap class="mb-2 mx-1">
      <v-flex xs12 >
        <span class="headline blue--text text--darken-4 ">{{ $t("events.conferences") }}</span>
        <div class="ml-1 mt-1 px-0">
          <app-select-year-conference></app-select-year-conference>
        </div>
      </v-flex>
    </v-layout>
    <v-layout  row wrap class="my-0 mx-1">
        <v-flex v-for="(item, index) in conferences" :key=index xs12 sm12 md12 lg12 xl12 class="my-1" >
          <v-card tile  elevation=3 min-width=100% >
            <div class=" subheading font-weight-bold ml-3 mt-1 ">
              <router-link :to="{name:'conference',params:{id:item.entity_id}}" class="blue--text text--darken-4">
                {{item.title}}
              </router-link>
              <p v-if="item.field_conference_webpage_url">
                <a :href="item.field_conference_webpage_url" class="body-1 blue--text text--darken-4">
                  <span v-if="item.field_conference_webpage_title">{{item.field_conference_webpage_title}}</span>
                  <span v-else> Conference website</span>
                </a> 
              </p>
              <p class="date body-2 font-weight-regular pt-1 pl-1" >
                {{item.event_calendar_date_value | dateEU('DD.MM.YYYY')}} to 
                {{item.event_calendar_date_value2 | dateEU('DD.MM.YYYY')}}
              </p>
              <div class="justify body-2 font-weight-bold ml-0 mt-1 mr-1">Organizers:&nbsp;
                <span v-html="item.field_organisation_value"></span>
              </div>
              <div  class="justify body-2 font-weight-regular ml-0 mt-1 mr-1 grey--text text--darken-2">
                Place: <span v-html="item.field_usualy_place_seminar_value"></span>
              </div>
              <a v-if="item.filename" :href = "item.filename"
                class="font-weight-regular caption ml-0 mt-1 mr-1">
                  <img src="../../../assets/research/acrobat_icon.png">
                  <span v-if="item.field_event_file_description">{{item.field_event_file_description}}</span>
                  <span v-else>{{item.filename}}</span>
                </a>
              <p  v-html = "item.body_value"  
                class="justify body-2 font-weight-regular ml-0 mt-1 mr-2 black--text"> -->
              </p>
            </div>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container> 
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import selectYearConference from './SelectYearConference.vue';

export default {
  data(){
    return {
      show:false,
    }
  },
  components:{
    'AppSelectYearConference':selectYearConference,
  },
  created(){
    this.initConferences();
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
        smAndDown:'smAndDown'
    }),
    ...mapGetters('conferences',{
      conferences:'conferences',
    }),
  },
  methods: {
    ...mapActions('conferences',{
      initConferences:'initConferences',
    })
  },
}
</script>
<style scoped>
.justify {
  text-align: justify;
}
.date{
  border-left-color: orange;
  border-left-width: 2pt;
  border-left-style:groove;
}

</style> 
</style>
