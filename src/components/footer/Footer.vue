<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      width="100%"
      flat
      tile
      class=" white--text text-xs-center"
      style="background: #252697;" 
    >
      <v-card-text>
        <v-layout wrap row >
          <v-flex xs12 lg2 xl2 offset-xs0 offset-xl2 offset-lg2>
            <img src="http://www.avcr.cz/opencms/export/system/modules/cz.nelasoft.opencms.avcr/resources/img/logo-cs.png_618290174.png" 
             class="mt-2" width="167" height="45" alt="Akademie věd České republiky">
          </v-flex>
          <v-flex xs12 lg2 xl2>
            <img src="https://initiative.eudml.org/themes/eudml/logo.png"  width="185em" class="mt-2 mb-2">
          </v-flex>
          <v-flex xs6 hidden-sm-and-up offset-xs1>
            <img src="http://www.jcmf.cz/sites/default/files/garland_logo.png" width="48em" class="mt-2" 
              alt=" The Union of Czech Mathematicians and Physicists" title=" The Union of Czech Mathematicians and Physicists" id="logo">
          </v-flex>
          <v-flex lg2 xl2 hidden-xs-only>
            <img src="http://www.jcmf.cz/sites/default/files/garland_logo.png" width="48em" class="ml-0 mt-2" 
              alt=" The Union of Czech Mathematicians and Physicists" title=" The Union of Czech Mathematicians and Physicists" id="logo">
          </v-flex>
          <v-flex xs4 hidden-sm-and-up >
              <img src="http://www.eu-maths-in.cz/images/eu-maths-in-eu-logo.png" style="border:0;" alt="EU-MATHS-IN" class="mr-5 mt-2" width="95em">
          </v-flex>
          <v-flex  lg2 xl2 hidden-xs-only >  
            <img src="http://www.eu-maths-in.cz/images/eu-maths-in-eu-logo.png" style="border:0;" alt="EU-MATHS-IN" class="mr-5 mt-2" width="95em">
          </v-flex>
        </v-layout>  
      </v-card-text>

      <v-card-text class=" white--text text-xs-center my-0 py-0">
        <v-layout wrap row >
          <v-flex xs12 hidden-sm-and-up >
              Institute of Mathematics CAS
          </v-flex>
          <v-flex xs12 hidden-sm-and-up >
            Žitná 25,
          </v-flex>
          <v-flex  xs12 hidden-sm-and-up>
            115 67   Praha 1,
          </v-flex> 
          <v-flex  xs12 hidden-sm-and-up> 
            Czech Republic
          </v-flex>
          <v-flex  xs12 hidden-sm-and-up>
            Tel. +420 222 090 702 <br>E-mail mathinst@math.cas.cz 
          </v-flex>
          <v-flex  lg12 xl12 hidden-xs-only> 
            Institute of Mathematics CAS,&nbsp;&nbsp;  
            Žitná 25,&nbsp;&nbsp;  115 67&nbsp;&nbsp; Praha 1,&nbsp;&nbsp; Czech Republic
          </v-flex>
          <v-flex lg12 xl12 hidden-xs-only>
            Tel. +420 222 090 702 &nbsp;&nbsp;E-mail mathinst@math.cas.cz
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class=" white--text text-xs-center">
        &copy;2019 — Vujs
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data() { 
    return { 
      xsOnly:false,
    }
  },
  monted(){
    this.xsOnly = this.$vuetify.breakpoint.xsOnly;
  },
}
</script>