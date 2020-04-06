<template>
  <v-layout
     xs12 md6  row wrap 
    class="hidden-lg-and-up basic"  >
    <v-flex xs12>
      <ul>
        <li v-for="(itemMenu, index) in mainMenu"
          :class="['menudown',{'dropup':itemMenu.id == idActiv},{'white':itemMenu.id == idActiv}]" 
          :key="index" flat 
          @click="setSubmenu(itemMenu)">
          <v-btn 
            :class="['dropdown-toggle','white--text',{'blue-grey--text text--darken-3':itemMenu.id == idActiv}]"   
            flat
            >{{itemMenu.name[language]}}
            <span v-if="itemMenu.dropdown" :class="{dropup:itemMenu.id == idActiv}">
              <span class="dropup-toggle"></span>            </span>
          </v-btn>
          <ul v-if="itemMenu.id == idActiv" @click="toggleDrawer()">
            <router-link 
              v-for="(item, index) in items" :key="index"  
              class="submenu ml-1 pl-4 py-3 "
              :to="item.url" tag="li">
              <span class="blue--text">{{item.name[language]}}</span>
            </router-link>
          </ul>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default{
  props: ['mainMenu'],
  computed: {
    ...mapGetters('header',{
        items:'items',
        showItems:'showItems',
        idActiv:'idActiv',
        language:'language'
    })
  },
  methods:{
    ...mapActions('header',{
        setSubmenu: 'setSubmenu',
        toggleDrawer:'toggleDrawer',
    }),
  }
}
</script>
<style>
ul {
  padding:0;
  margin:0; 
  list-style-type:none;
}
li.menudown{
  border-bottom-style: solid ;
  border-bottom-width: 1px; 
  border-bottom-color: rgba(248,248,248,0.5);  
}
.submenu{
  border-top-style: solid ;
  border-top-width: 1px; 
  border-top-color:#2196F3; 
}
.basic{
  background: #252697
}
</style>
