<template>
  <v-card tile class="d-flex">
    <div class="black--text" >
      <router-link :to="{name:'researcher',params:{id:researcher.id}}" >
        <v-img 
        :src=researcher.photo
        :lazy-src=researcher.photo
          aspect-ratio="0.75"
          class="grey lighten-2"
          max-width="200px">
          <template v-slot:placeholder>
            <v-layout
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </router-link>
      <div  class="mt-2 ml-1">
        <router-link :to="{name:'researcher',params:{id:researcher.id}}" >
          <p class="mb-0  black--text">
            <span class="title">{{researcher.last_name}}</span><br>
            <span class="body-1">{{researcher.first_name}}</span> </p>
          <p class="ma-0 pb-2  black--text caption">{{researcher.title}}</p>
        </router-link>
        <a :href="'mailto:'+researcher.per_email" >
          <svg style="width:20px;height:20px" viewBox="0 0 24 28">
            <path fill="currentColor" d="M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z" />
          </svg>
        </a>
        <p class="body-1">Tel.: {{researcher.tel}}  +420 221 403 111</p>
        <router-link  class="body-1" :to="{name:'detail',params:{id:researcher.department.id}}" >
          <p class="mx-0 mt-1 pa-0 black--text">{{ $t("researchers.departement") }}: </p>
          <p class="body-2 mb-1  black--text">{{researcher.department.name[language]}}</p>
        </router-link>
        <app-doc-detail v-if="researcher.typeResearcher =='doc'"
          :university="researcher.university" :supervisors="researcher.supervisors">
        </app-doc-detail>
      </div>
    </div>
  </v-card>         
</template>
<script>
import {mapGetters} from 'vuex';
import docDetail from '../postdocs/docDetail.vue';
export default {
  props:['researcher'],
  components:{
    appDocDetail:docDetail,
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
    })
  },
}
</script>

