<template>
  <v-footer
    height="auto"
    class="blue-head"
  >
  <app-soc-network  class=" hidden-sm-and-down black"></app-soc-network>
    <v-card width="100%" fla tile class=" white--text text-xs-center blue-head">
      <v-card-text>
        <v-layout wrap row >
          <v-spacer></v-spacer>
          <v-flex xs12 class="hidden-md-and-up black">
            <app-soc-network></app-soc-network>
          </v-flex>          
          <v-flex xs12 sm12 md12 lg2 xl2  offset-xs3 offset-sm4 offset-md4 offset-lg1 offset-xl1 >
            <a href="https://www.avcr.cz/en/"  target="_blank">
            <v-img
              :src="require('../../data/photos/foot/logo-cs.png_618290174.png')"
              alt="Akademie věd České republiky"
              width="12em" 
              position="right 60%"
              class="mt-4 mb-3"
              contain>
            </v-img>
            </a>
          </v-flex>
          <v-flex xs12 sm12 md12 lg2 xl2  offset-xs3 offset-sm4 offset-md4 offset-lg0 offset-xl0>
            <a href="https://euro-math-soc.eu/"  target="_blank">
              <v-img
                :src="require('../../data/photos/foot/ems1.jpeg')"
                alt="European Mathematical Society"
                width="12em" 
                class="ml-2 mt-2 mb-2 mr-0"
                contain>
              </v-img>
            </a>
          </v-flex>
          <v-flex xs12 sm12 md12 lg1 xl1 offset-xs2 offset-sm0 offset-md0 offset-lg0 offset-xl0 class="mt-4 mr-5 mb-1">
            <a href="https://euro-math-soc.eu/committee/ercom"  target="_blank">
            <div class="mr-2">
             <span class="white--text title ml-0 ">ERCOM</span>
            </div>
            </a>
          </v-flex>
          <v-flex xs12 sm12 md12 lg1 xl1 offset-xs5 offset-sm5 offset-md5 offset-lg0 offset-xl0 >
            <a href="https://jcmf.cz/?q=en" target="_blank">
              <v-img
                :src="require('../../data/photos/foot/logo_jmc.png')"
                alt="The Union of Czech Mathematicians and Physicists"
                width="5em" 
                class="mt-2 mb-2 ml-0 "
                contain>
              </v-img>
            </a> 
          </v-flex>
           <v-flex xs12 sm12 md12 lg2 xl2 offset-xs2 offset-sm4 offset-md4 offset-lg0 offset-xl0 class="mt-2">
             <a href="http://www.eu-maths-in.cz/"  target="_blank"> 
              <v-img
                :src="require('../../data/photos/foot/logo_eumathin.png')"
                alt="Czech Network for Mathematics in Industry"
                width="8em" 
                class="mt-2 mb-2 ml-5  white"
                contain>
              </v-img>
            </a>  
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>  
      </v-card-text>
      <v-card-text class=" white--text text-xs-center mb-2 mt-1">
        <v-layout wrap row >
          <v-flex xs12 sm12  md11 hidden-lg-and-up >
              Institute of Mathematics CAS
          </v-flex>
          <v-flex xs12 sm12  md11 hidden-lg-and-up >
            Žitná 25,
          </v-flex>
          <v-flex  xs12 sm12  md11 hidden-lg-and-up >
            115 67   Praha 1,
          </v-flex> 
          <v-flex  xs12 sm12  md11 hidden-lg-and-up > 
            Czech Republic
          </v-flex>
          <v-flex  xs12 sm12  md11  hidden-lg-and-up >
            Tel. +420 222 090 702 <br>E-mail mathinst@math.cas.cz 
          </v-flex>
          <v-flex  lg12 xl12 hidden-md-and-down> 
            Institute of Mathematics CAS,&nbsp;&nbsp; 
            Žitná 25,&nbsp;&nbsp;  115 67&nbsp;&nbsp; Praha 1,&nbsp;&nbsp; Czech Republic
          </v-flex>
          <v-flex lg12 xl12 hidden-md-and-down>
            Tel. +420 222 090 702 &nbsp;&nbsp;E-mail mathinst@math.cas.cz
          </v-flex>
        </v-layout>
      </v-card-text>
      <v-card-text class=" white--text text-xs-center caption">
        <v-layout wrap row >
          <v-flex xs12 sm11  md11  >
             &copy;2019 — Vujs
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import socNetwork from './SocNetwork.vue';
export default {
  data() { 
    return { 
      xsOnly:false,
    }
  },
  monted(){
    this.xsOnly = this.$vuetify.breakpoint.xsOnly;
  },
  components:{
    AppSocNetwork:socNetwork,

  }
}
</script>
<style scoped>
.blue-head{
  background: #252697;
}
</style>