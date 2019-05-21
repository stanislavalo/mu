// import data
import menus from '../../data/header.js';
// import components
import mainMenu from './menus/Mainmenu.vue';
import logoBig from './logo/LogoBig.vue';
import logoSmall from './logo/LogoSmall.vue';
import navigationStable from './menus/NavigationStable.vue';
import bisMenu from './menus/BisMenu.vue';
import mainMenuSandwich from './menus/MainMenuSandwich.vue';
import bisMenuSandwich from './menus/BisMenuSandwich.vue';

export default {
  data(){
    return{
      drawer:false,
      mdAndDown:false,
      showBisMenuDown:false,
      showMainMenuDown:false,
      mainMenu: menus[0].items,
      bisMenu: menus[1].items,
      items:[],
      MembersMenu: [ 
        'Intranet',
        'Webmail',
        'Login' 
      ], 
    }
  },
  components:{
    AppMainMenu: mainMenu,
    AppLogoBig: logoBig,
    AppLogoSmall: logoSmall,
    AppNavigationStable: navigationStable,
    AppBisMenu: bisMenu,
    AppMainMenuSandwich: mainMenuSandwich,
    AppBisMenuSandwich: bisMenuSandwich,
  },
  mounted () {
    console.log(this.$vuetify.breakpoint);
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    toggleDrawer(){
      this.drawer = !this.drawer; 
      this.mdAndDown = this.$vuetify.breakpoint.mdAndDown;
      if(this.drawer){
        this.showBisMenuDown = true;
        if(this.mdAndDown){
          this.showMainMenuDown = true;
        }
      }
      else{
        this.showBisMenuDown = false;
        if(this.mdAndDown){
          this.showMainMenuDown = false;
        }
      }
    }
  }
}