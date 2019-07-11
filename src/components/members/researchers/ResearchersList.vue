<template>
  <v-card >
    <v-container>
      <v-layout row wrap>
        <v-flex xl12>
          <v-card >
            <v-layout>
              <v-flex xl1>
                <router-link :to="{name:'researcher',params:{id:researcher.id}}" >
                <v-img
                  :src=researcher.photo
                  :lazy-src=researcher.photo
                    aspect-ratio="0.65"
                    class="grey lighten-2"
                    max-width="90px"
                    max-height="140px"
                  >
                  <v-container fill-height fluid mt-4>
                    <v-layout align-end justify-end ml-4 mt-4>
                      
                      <v-flex  align-end  flexbox>
                        <img src="../../../assets/members/ic_assignment_ind.png" >
                      </v-flex>
                    </v-layout>
                  </v-container>
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
              <v-flex xl2>
                <v-card-title primary-title>
                  <div>
                    <router-link :to="{name:'researcher',params:{id:researcher.id}}" >
                      <div class="headline">{{researcher.last_name}}</div>
                      <div class="subheading mb-2">{{researcher.first_name}} </div>
                    </router-link>
                    <div>
                      <p class="ma-0 pa-0  black--text">{{ $t("researchers.departement") }}: <span class="body-2">{{researcher.department[2]}}</span></p>
                      <p class="body-2 mb-1  black--text">{{researcher.department[language]}}</p></div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex >
                <p class="ma-0 pa-1 "><span class="body-2">{{ $t("researchers.interests") }}:</span>
                <br>{{researcher.interest}}</p>
              </v-flex>
            </v-layout>
            <!-- <v-divider light></v-divider> -->    
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props:['researcher'],
}
</script>
<style>
a {
  color: black
}
</style>


