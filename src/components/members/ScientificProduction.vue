<template>
  <v-expansion-panel focusable >
    <v-expansion-panel-content
      v-for="(production,index) in productions"
      :key="index"
    >
      <template v-slot:header v-if="production.show">
        <div >{{production.title}}</div>
      </template>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  data(){
    return {productions: [
      {title: 'Grants',show:true},
      {title:'Publications',show:true},
      {title:'Preprints',show:true},
      {title:'Lectures',show:false},
      {title:'Theses',show:true}
      ]
    };
  },
}
</script>

