<template>
  <v-layout 
    xs12 md6 row wrap 
    class="hidden-lg-and-up" style="background: #252697;" >
    <v-flex  xs12  md3 
      v-for="(itemMenu, index) in bisMenu" 
      :class="['menudown',{'white':itemMenu.id == idActiv}]" 
      :key="index" flat
      @click="setSubmenu(itemMenu)">
      <v-btn v-if="itemMenu.dropdown" flat 
        :class="['white--text','dropdown-toggle',{'blue-grey--text text--darken-3':itemMenu.id == idActiv}]"   
        style="text-transform: none !important;">
        {{itemMenu.name[language]}}
        <span v-if="itemMenu.dropdown" :class="{dropup:itemMenu.id == idActiv}">
          <span class="dropup-toggle"></span>
        </span>
      </v-btn>
      <router-link v-else tag="v-btn"
        flat class="white--text" style="background: #252697; border-style: hidden;"
        :to="itemMenu.url" >
        {{itemMenu.name[language]}}
      </router-link>
      <ul v-if="itemMenu.id == idActiv" @click="toggleDrawer(true)">
        <router-link 
          v-for="(item, index) in items" :key="index" 
          class="submenu ml-3 px-2 py-3 "
          :to="item.url" tag="li" active-class="active" >
          <a class="blue--text">{{item.name[language]}}</a>
        </router-link>
      </ul>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default{
  props: ['bisMenu'],
  computed: {
    ...mapGetters({
        items:'items',
        showItems:'showItems',
        idActiv:'idActiv',
        language:'language',
    })
  },
  methods:{
    ...mapActions({
        setSubmenu: 'setSubmenu',
        toggleDrawer:'toggleDrawer',
    }),
  }
}
</script>


