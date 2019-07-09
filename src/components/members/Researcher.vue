<template>
  <v-container grid-list-sm fluid bg>
      <v-layout xs12
        flex-child
        wrap
      >
        <v-flex
          xs12
          md12
          d-flex
        >
          <v-layout wrap>
            <v-flex xs9>
              <v-sheet
                class="d-flex "
                fill-height 
              >
               <v-img
                  :src=photo
                  :lazy-src=photo
                    aspect-ratio="0.75"
                    class="grey lighten-2"
                  >
               </v-img>
              </v-sheet>
            </v-flex>
            <v-flex xs3>
              <v-spacer></v-spacer>
            </v-flex>
            <v-flex xs12>
              <v-sheet class="d-flex transparent"> 
                <div class="mt-2  white--text">
                  <h3 class="display-1 font-weight-bold mb-0">{{researcher.first_name}} {{researcher.last_name}}</h3>
                  <p class="my-0 pa-0 ">{{researcher.title}}</p>
                </div>
              </v-sheet>
            </v-flex>
            <v-flex xs12>
             <h3 class="headline font-weight-bold orange--text mt-3 mb-1">{{ $t("researchers.interests") }}: </h3>
            </v-flex>
            <template v-for="(item, index) in researcher.interest" >
              <v-flex xs2 align-center justify-start :key="index">
                  <img src="../../assets/members/circle.png">
              </v-flex>
              <v-flex xs10 :key="'a'+index">
                <div class="pa-3 v-card v-sheet theme--light mb-2">
                  <h3 class="subheading font-weight-bold">{{item.title}}</h3>
                  <div>{{item.description}}
                  </div>
                </div>
              </v-flex>
            </template>
            <v-flex xs12 class=" my-1 position">
              <v-layout class="layout justify-space-between">
                <h3 class="headline font-weight-bold orange--text mt-1  mb-4">{{ $t("researcher.about") }}</h3>
                <blockquote style="max-width: 230px;">
                  <p class="subheading font-weight-light font-italic white--text mt-2">
                    I have been a Head of Departement Constructive Methods of Mathematical Analysis from...
                  </p>
                  <v-footer class="text-xs-start orange">
                    <v-btn class="v-btn orange primary">
                      <v-content>
                        download cv
                      </v-content>
                    </v-btn>
                  </v-footer>
                </blockquote>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-sheet class="transparent mt-2">
                <h5 class=" orange--text">{{ $t("researchers.departement") }}: </h5>
                <h5 class="white--text ">{{researcher.department[language]}}</span></h5>
              </v-sheet>
            </v-flex>
            <v-flex xs3 class="orange--text text-uppercase">
              <p class="py-0">email:</p>
              <p class="py-0">phone:</p>
              <p class="py-0">office:</p>
              <p class="py-0">location:</p>
            </v-flex>
            <v-flex xs9 class="white--text">
              <p class="py-0">{{researcher.per_email}}</p>
              <p class="py-0">{{researcher.telephone}} </p>
              <p class="py-0">{{researcher.office}} </p>
              <p class="py-0">{{location}}</p>
            </v-flex>
            <v-flex xs12>
              <scientific-production></scientific-production>
            </v-flex>
          </v-layout>
        </v-flex> 
      </v-layout>
    </v-container>
</template>
<script>
import departments from '../../data/departments';
import members from '../../data/members';
import scientificProduction from './ScientificProduction.vue';
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      location:"IM CAS Žitná 25, Praha 1 Czech Republic",
      photo:"http://localhost:8080/src/data/photos/2.jpg",
      researcher:{
        title: 'Mgr',  
        last_name:'Rozložník', 
        en_name:'Rozloznik',  
        en_first_name :'Pavel', 
        first_name:'Pavel',  
        per_email:'pavel.rozloznik@math.cas.cz', 
        per_url:'',  
        telephone:'+420 222 090 713',  
        fax:'+420 222 090 716',  
        office:'257',
        department:["Mathematical Logic and Theoretical Computer Science","Matematická logika a teoretická informatika"],
        interest:[{title:'differential equations',description:'partial differential equations, dynamical systems, mathematical fluid ' },   
            {title:'existence of Strong Solutions', description:'On the Existence of Strong Solutions to a Fluid Structure Interaction Problem with Navier Boundary Conditions'}]
    
      }
    };
  },
  computed: {
  ...mapGetters({
      language:'language',
    })
  },
  components: {
    'scientific-production': scientificProduction,
  }
}
</script>

<style>
.bg {
  /* The image used */
  background-image: /*linear-gradient(rgba(43, 41, 41, 0.5), rgba(16, 9, 36, 0.5)),*/
        url("../../../src/assets/members/mural.jpg");          
  background-repeat: repeat-y;
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.transparent {
  background-color: transparent!important;
  border-color: transparent!important;
 }
 .v-sheet {
    display: block;
    border-radius: 2px;
    position: relative;
    transition: .3s cubic-bezier(.25,.8,.5,1);
 }
</style>
