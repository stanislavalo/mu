<template>
  <v-container grid-list-sm fluid bg >
    <v-layout xs12 class="my-0 " flex-child wrap>
      <v-flex xs12 md12 d-flex :class="{'ml-1':xsOnly,'ml-3':!xsOnly}">
        <v-layout wrap>
          <v-flex xs12 sm3 md3 lg2 xl2>
            <v-sheet class="d-flex " fill-height >
              <v-img :src=photo :lazy-src=photo aspect-ratio="0.75" class="grey lighten-2"></v-img>
            </v-sheet>
             <div class="my-0  white--text">
              <h3 class="display-1 font-weight-bold mt-2">{{researcher.first_name}} {{researcher.last_name}}</h3>
              <p class="my-0 pa-0 ">{{researcher.title}}</p>
             </div>
            <app-researcher-info v-if="!xsOnly" :researcher="researcher"></app-researcher-info>
          </v-flex>
          <v-flex xs12 sm9 md9 lg9 xl9 >
            <app-researcher-quotes v-if="!xsOnly" :quotes="researcher.quotes" class="mt-0 ml-3"></app-researcher-quotes>
            <app-researcher-department-interest v-if="!xsOnly"  class="ml-3" :researcher="researcher" ></app-researcher-department-interest>
            <v-spacer></v-spacer>
          </v-flex>

          <app-researcher-department-interest v-if="xsOnly"  :researcher="researcher" ></app-researcher-department-interest>
          <v-flex xs12 mt-1> 
            <app-scientific-production v-if="isProduction" :id="id" :xsOnly="xsOnly"></app-scientific-production>
          </v-flex>
        </v-layout>
      </v-flex> 
    </v-layout>
  </v-container>
</template>
<script>
import departments from '../../../data/departments';
import members from '../../../data/members';
import scientificProduction from '../scientificProduction/ScientificProduction.vue';
import researcherQuotes from './ResearcherQutes.vue';
import ResearcherDepartmentInterest from './ResearcherDepartmentInterest.vue';
import researcherInfo from './ResearcherInfo.vue';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  data(){
    return{
      xsOnly:false,
      photo:"http://www-test.math.cas.cz/data/photos/2.jpg",
      id:this.$route.params.id,
      isProduction:false,
      researcher:{
        id:1,
        title: 'Mgr',  
        last_name:'Rožník', 
        en_name:'Roznik',  
        en_first_name :'Pavel', 
        first_name:'Pavel',  
        per_email:'pavel.roznik@math.cas.cz', 
        per_url:'',  
        telephone:'+420 222 090 713',   
        office:'257',
        department:["Evolution Differential Equations", "Evoluční diferenciální rovnice",5],
        departmentDetail: ["Evolution Differential Equations", "evolučních diferenciálních rovnic"],
        interest:[
          {title:'differential equations',description:'partial differential equations, dynamical systems, mathematical fluid ' },   
          {title:'existence of Strong Solutions', description:'On the Existence of Strong Solutions to a Fluid Structure Interaction Problem with Navier Boundary Conditions'},
         {title:'Functional differential equations',description:'boundary value problems; numerical-analytic methods; equations in partially ordered spaces'}
        ],
        quotes:{text:"Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.",author:"John Steinbeck"},    
      }
    };
  },
  created(){
    this.xsOnly = this.$vuetify.breakpoint.xsOnly;
    this.setId(this.id);
    this.setNbGrants(5);
    this.setNbPublications(12);
    if(this.nb_publications >0|| this.nb_grants >0)
      this.isProduction=true;
  },
  computed: {
  ...mapGetters('header',{
      language:'language',
      mdAndDown:'mdAndDown'
    }),
  ...mapGetters('researcher', {
    nb_grants:'nb_grants',
    nb_publications:'nb_publications',
   }),
  },
   methods:{
    ...mapActions('researcher',{
      setId:'setId',
      setNbGrants: 'setNbGrants',
      setNbPublications:'setNbPublications',
    }),
   },
  components: {
    'AppScientificProduction': scientificProduction,
    'AppResearcherQuotes':researcherQuotes,
    'AppResearcherDepartmentInterest': ResearcherDepartmentInterest,
    'AppResearcherInfo':researcherInfo,
  }
}
</script>

<style>
.bg {
  /* The image used */
  background-image: /*linear-gradient(rgba(43, 41, 41, 0.5), rgba(16, 9, 36, 0.5)),*/
        url("../../../../src/assets/members/mural.jpg");          
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