<template>
  <v-card >
    <v-container>
      <v-layout row wrap>
        <v-flex lg12 xl12 >
          <v-card >
            <v-layout>
              <v-flex lg2 xl2>
                <router-link :to="{name:'researcher',params:{id:researcher.id}}" >
                <v-img
                  :src=researcher.photo
                  :lazy-src=researcher.photo
                    aspect-ratio="0.65"
                    class="grey lighten-2"
                    max-width="90px"
                    max-height="140px"
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
                </router-link> 
              </v-flex>
              <v-flex lg4 xl3 >
                <v-card-title class="my-0 py-2" >
                  <div>
                    <router-link :to="{name:'researcher',params:{id:researcher.id}}" >
                      <div class="headline">{{researcher.last_name}}</div>
                      <div class="subheading mb-2">{{researcher.first_name}} </div>
                      <div class="subheading ">{{researcher.title}} </div>
                    </router-link>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex lg6 xl7 class="mt-2">
                <a :href="'mailto:'+researcher.per_email" >
                  <svg style="width:24px;height:24px" viewBox="0 0 24 28">
                    <path fill="currentColor" d="M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z" />
                  </svg>
                </a>
                <p>Tel.: {{researcher.tel}}  +420 221 403 111</p>
                <router-link :to="{name:'detail',params:{id:researcher.department.id}}" class="mt-2">
                  <p class="mx-0 pa-0  mt-2 black--text">{{ $t("researchers.departement") }}: </p>
                  <p class="body-2 mb-1  black--text">{{researcher.department.name[language]}}</p>
                </router-link>
                <app-doc-detail v-if="researcher.typeResearcher =='doc'"
                  :university="researcher.university" :supervisors="researcher.supervisors">
                </app-doc-detail>
              </v-flex>
            </v-layout>  
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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
    }),
  },
}
</script>
<style>
a {
  color: black
}
</style>


