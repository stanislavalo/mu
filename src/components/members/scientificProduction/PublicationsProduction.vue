<template>
  <v-expansion-panel focusable >
    <v-expansion-panel-content class="mp-0">
      <template v-slot:header v-if="xsOnly"  >
        <div>{{ $t("production.publications")}} </div>
      </template>
      <template v-slot:header v-else>
        {{ $t("production.publications")}}
      </template>
      <v-card>
        <v-card-text class="grey lighten-3" key="running">
          <p > 
            publications list
          </p>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>