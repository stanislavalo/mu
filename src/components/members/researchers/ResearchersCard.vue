<template>
  <v-card tile class="d-flex">
    <div class="black--text" >
      <router-link :to="{name:'researcher',params:{id:researcher.id}}" >
        <v-img 
        :src=researcher.photo
        :lazy-src=researcher.photo
          aspect-ratio="0.75"
          class="grey lighten-2"
          max-width="200px"
        >
          <v-container fill-height fluid >
            <v-layout align-end justify-end ml-4 mt-4>
              <v-spacer></v-spacer>
              <v-flex xs4 align-end  flexbox>
                <img src="../../../assets/members/ic_assignment_ind.png">
              </v-flex>
            </v-layout>
          </v-container>
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
          <h5 class="mb-0  black--text">{{researcher.first_name}} {{researcher.last_name}}</h5>
          <p class="ma-0 pa-0  black--text caption">{{researcher.title}}</p>
        </router-link>
        <router-link :to="{name:'detail',params:{id:researcher.department[3]}}" >
          <p class="ma-0 pa-0  black--text">{{ $t("researchers.departement") }}: 
            <span class="body-2">{{researcher.department[2]}}</span>
          </p>
          <p class="body-2 mb-1  black--text">{{researcher.department[language]}}</p>
        </router-link>
        
        <p class="ma-0 pa-1 interests">{{ $t("researchers.interests") }}:<br>{{researcher.interest}}</p>
      </div>
    </div>
  </v-card>         
</template>
<script>
export default {
  props:['researcher'],
}
</script>

