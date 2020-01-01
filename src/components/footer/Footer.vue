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
          <v-spacer></v-spacer>
          <v-flex xs12 lg2 xl2  offset-xs3  offset-lg1 offset-xl1 >
            <a href="https://www.avcr.cz/en/" >
            <v-img
              :src="require('../../data/photos/foot/logo-cs.png_618290174.png')"
              alt="Akademie věd České republiky"
              width="12em" 
              position="right 60%"
              class="mt-2 mb-2"
              contain>
            </v-img>
            </a>
          </v-flex>
          <v-flex xs12 lg2 xl2 offset-xs1 offset-lg0 offset-xl0>
            <a href="https://eudml.org/" >
              <v-img
                :src="require('../../data/photos/foot/eudml_logo.png')"
                alt="The European Digital Library"
                width="18em" 
                class="mt-2 mb-2 mr-5"
                contain>
              </v-img>
            </a>
          </v-flex>
          <v-flex lg2 xl1 hidden-xs-only offset-lg1 >
            <a href="https://jcmf.cz/?q=en" target="blanc">
              <v-img
                :src="require('../../data/photos/foot/logo_jmc.png')"
                alt="The Union of Czech Mathematicians and Physicists"
                width="5em" 
                class="mt-2 mb-2 mx-0"
                contain>
              </v-img>
            </a> 
          </v-flex>
           <v-flex  lg2 xl2 hidden-xs-only offset-xl1>
             <a href="http://www.eu-maths-in.cz/" target="blanc"> 
              <v-img
                :src="require('../../data/photos/foot/logo_eumathin.png')"
                alt="Czech Network for Mathematics in Industry"
                width="8em" 
                class="mt-2 mb-2 ml-0 mr-4"
                contain>
              </v-img>
            </a>  
          </v-flex>
          <v-flex xs4 hidden-sm-and-up offset-xs2>
            <a href="https://jcmf.cz/?q=en" target="blanc">
              <v-img
                :src="require('../../data/photos/foot/logo_jmc.png')"
                alt="The Union of Czech Mathematicians and Physicists"
                width="4em" 
                class="mt-2 mb-2 mx-0"
                contain>
              </v-img> 
            </a>
          </v-flex> 
          <v-flex xs6 hidden-sm-and-up >
            <a href="http://www.eu-maths-in.cz/" target="blanc"> 
              <v-img
                :src="require('../../data/photos/foot/logo_eumathin.png')"
                alt="Czech Network for Mathematics in Industry"
                width="8em" 
                class="mt-2 mb-2 mx-0"
                contain>
              </v-img>
            </a>
          </v-flex>
          <v-spacer></v-spacer>
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