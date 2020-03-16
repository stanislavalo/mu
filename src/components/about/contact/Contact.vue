<template>
  <div class="container">
    <div class="row mb-4" v-for="(marker, index) in markers" :key="index">
        <div class="col-md-3, col-lg-3, col-xl-3 ">
          <p  v-if="index == 0"
            :class="[ smAndDown ? 'ml-1' : 'ml-5','headline', 'blue--text', 'text--darken-4', ]" >
            {{ $t("about.contact") }}
            <router-link to="information" >
              <span class="body-2 ml-3 underline blue--text text--darken-4"> {{$t("about.information") }}</span>
            </router-link>
          </p>
          <p :class="[ smAndDown ? 'ml-1' : 'ml-5','mt-2']" v-html="marker.address"></p>
          <p  :class="[ smAndDown ? 'ml-1' : 'ml-5', 'mt-2']" v-html="marker.contact"></p>
          <p :class="[ smAndDown ? 'ml-1' : 'ml-5', 'mt-2']" v-html="marker.ic"></p>
        </div>
        <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <app-contact-map :gpss="marker.gpss" :gpsd="marker.gpsd" 
            :class="[ smAndDown ? 'mb-5' : 'mb-1']"></app-contact-map>
        </div>
    </div>
 </div>
</template>
<script>
import {mapGetters} from 'vuex';
import contactMap from './ContacMapt.vue';
export default {
  data(){
    return{
      markers:[
        {
          gpss:50.0773825,
          gpsd:14.4256044,
          address:" Institute of Mathematics CAS <br />Žitná 25 <br/> 115 67   Praha 1 <br/> Czech Republic<br />",
          contact:"Tel. +420 222 090 702<br />Fax +420 222 090 701<br />E-mail mathinst@math.cas.cz",
          ic:"IČ 67985840<br />DIČ CZ67985840",
        },
        {
          gpss:49.2073831,
          gpsd:16.5896503,
          address:"Institute of Mathematics CAS <br />Branch in Brno <br />Žižkova 22<br /> 616 62 Brno <br />Czech Republic",
          contact:"Tel. +420 532 290 375<br />Fax +420 541 218 657<br />E-mail mathinst@math.cas.cz",
          ic:"IČ 67985840<br />DIČ CZ67985840",
        }
      ]
    }
  },
  components:{
    AppContactMap:contactMap,
  },
  computed:{
    ...mapGetters('header',{
      smAndDown:'smAndDown',
    })
  }
}
</script>
<style scoped>
.underline{
  text-decoration: underline;
}
</style>

