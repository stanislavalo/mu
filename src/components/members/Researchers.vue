<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <div class="ma-0 pa-1 headline blue--text text--darken-4 ">Researchers</div>
      <v-card>
        <v-container grid-list-sm fluid class="ma-0 pa-1">
          <v-layout row wrap>
            <v-flex
              v-for="n in 21"
              :key="n"
              xs6
              d-flex
            >
              <v-card  tile class="d-flex">
                <div>
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
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
                  <div class="mt-2 ml-1">
                    <h5>Tomáš Bodnár</h5>
                    <span class="ma-0 pa-0">Ing. Dr., Ph.D.</span><br>
                    <span class="ma-0 pa-0">Department: EDE</span><br>
                    <span class="ma-0 pa-0">	Research interests:<br>Descriptive set theory and its applications in real and functional analysis</span>
                  </div>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>