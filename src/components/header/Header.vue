<template>
<!------------HEADER ------------------->
  <div>
    <v-layout xs12 md6 row wrap 
      style="background: #252697;" 
      min-height="100"> 
      
      <!------------LOGO, TITLE------------------->
      <v-flex shrink  class="hidden-sm-and-down ma-0">
        <app-logo-big></app-logo-big>
      </v-flex>
      <v-flex shrink  class="hidden-md-and-up ma-0">
       <app-logo-small></app-logo-small>
      </v-flex>
      <!------------MENUS LINE------------------------>
      <v-flex   class="mt-2">
        <!---------navigation stable - always display------>
        <app-navigation-stable></app-navigation-stable>
        <!----------Main menu---line------------->
        <app-main-menu :keyrand="getRandomInt(10)" :mainMenu="mainMenu"></app-main-menu>
        <v-layout wrap> 
          <!------------drawer------------------->
          <v-flex  class="hidden-lg-and-up " >
            <v-layout align-end justify-end > 
              <v-toolbar-side-icon light
                @click="toggleDrawer"
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
      <app-bis-menu-sandwich v-if="showBisMenuDown" :bisMenu="bisMenu"></app-bis-menu-sandwich> -->
  </div>   
</template>
<script src="./header.js"></script>
<style src="./header.css"></style>

