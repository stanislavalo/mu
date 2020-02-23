<template>
<!------------HEADER ------------------->
  <div class="col-sm-12 col-lg-12  col-centered mx-0 px-0" >
    <!-- <div class="lg12  col-centered xl11" > -->
    <v-layout xs12 md12 lg12 row wrap  class="mx-0 px-0"
      style="background: #252697;" 
      min-height="90px">    
      <!------------LOGO, TITLE------------------->
      <app-logo-big></app-logo-big>
      <!------------MENUS LINE------------------------>
      <v-flex class="mt-2">
        <!---------navigation stable - always display------>
        <app-navigation-stable></app-navigation-stable>
        <!----------Main menu---line------------->
        <app-main-menu :keyrand="getRandomInt(10)" :mainMenu="mainMenu"></app-main-menu>
        <v-layout wrap> 
          <!------------drawer------------------->
          <v-flex  class="hidden-lg-and-up " >
            <v-layout align-end justify-end > 
              <v-toolbar-side-icon light
                @click="toggleDrawer(mdAndDown)"
                class="white--text" >
              </v-toolbar-side-icon>
            </v-layout>
          </v-flex>
          <!-------------bis menu line------------------>
          <v-flex  style="background: #252697;"  class="my-0 py-0  hidden-md-and-down">
            <app-bis-menu :keyrand="getRandomInt(10)" :bisMenu="bisMenu"></app-bis-menu>  
          </v-flex>
        </v-layout> 
      </v-flex>
    </v-layout>
    <!------------MENUS SANDWICH------------------------>
    <!----------Main menu---sandwich------------->
    <app-main-menu-sandwich v-if="showMainMenuDown"  :mainMenu="mainMenu"></app-main-menu-sandwich>
    <!-------------bis menu sandwich------------------>
    <app-bis-menu-sandwich v-if="showBisMenuDown" :bisMenu="bisMenu"></app-bis-menu-sandwich> 
  </div>   
</template>
<script>
// import data
import menus from '../../data/header.js';
// import getters + actions from store
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
// import components
import mainMenu from './menus/Mainmenu.vue';
import logoBig from './logo/LogoBig.vue';
import navigationStable from './menus/NavigationStable.vue';
import bisMenu from './menus/BisMenu.vue';
import mainMenuSandwich from './menus/MainMenuSandwich.vue';
import bisMenuSandwich from './menus/BisMenuSandwich.vue';

export default {
  data(){
    return{
      mainMenu: [],
      bisMenu: [],
      MembersMenu: [ 'Intranet','Webmail','Login' ],
    }
  },
  components:{
    AppMainMenu: mainMenu,
    AppLogoBig: logoBig,
    AppNavigationStable: navigationStable,
    AppBisMenu: bisMenu,
    AppMainMenuSandwich: mainMenuSandwich,
    AppBisMenuSandwich: bisMenuSandwich,

  },
  created: function() {
    var main = [];
    var bis = [];
    menus.forEach(function(element) {
      if(element.type == 'main'){
        main.push(element);
      }
      else if(element.type == 'bis'){
        bis.push(element);
      }
    });
    this.mainMenu = main;
    this.bisMenu = bis;

  },
  mounted () {
    console.log(this.$vuetify.breakpoint);
    this.$store.dispatch('header/set_MdAndDown', this.$vuetify.breakpoint.mdAndDown);
    this.$store.dispatch('header/set_SmAndDown', this.$vuetify.breakpoint.smAndDown);
  },
  computed: {
    ...mapGetters('header',{
      drawer:'drawer',
      showBisMenuDown:'showBisMenuDown',
      showMainMenuDown:'showMainMenuDown'
    }),
  },
  methods: {
    ...mapActions('header',{
      toggleDrawer:'toggleDrawer'
    }),
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }
}
</script>
<style>
.col-centered{
    float: none;
    /* margin: 0 auto; */
}
ul.menudown{
  position: absolute; 
  z-index:2; 
  background-color:white;
  width: 100%;
  min-width: 200px;
  max-width: 260px;
  border-bottom: 3px solid rgba(227, 226, 228, 0.6);
  border-left:3px solid rgba(227, 226, 228, 0.6);
  border-right:3px solid rgba(227, 226, 228, 0.6);
}
a, a:link, a:visited, a:active {
    text-decoration: none;
}
</style>
