<template> 
  <v-layout class="layout justify-space-between">
    <h3 class="headline font-weight-bold orange--text mt-1 mr-3 mb-4">{{ $t("researcher.about") }}</h3>
    <blockquote >
      <p class="subheading font-weight-light font-italic white--text mt-2">
        I have been a Head of Departement Constructive Methods of Mathematical Analysis from...
      </p>
      <v-footer v-if="mdAndDown" class="text-xs-start orange">
        <v-btn class="v-btn orange primary">
          <v-content >
            download cv
          </v-content>
        </v-btn>
      </v-footer>
      <v-btn v-else class="v-btn orange primary">
          <v-content >
            download cv
          </v-content>
        </v-btn>
    </blockquote>
    <v-spacer></v-spacer>
  </v-layout>
</template>
