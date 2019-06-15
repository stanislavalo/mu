<template>
  <v-layout :key="keyrand"
    align-end justify-end column 
    class="my-0 pb-0 ">
      <v-spacer></v-spacer>
      <ul class="nav nav-pills hidden-sm-and-down" >
        <li v-for="(itemMenu, index) in bisMenu"
          :class="[{'dropup':itemMenu.id == idActiv},{'white':itemMenu.id == idActiv}]"
          :key="index" flat
          @click="setSubmenu(itemMenu)">
          <v-btn v-if="itemMenu.dropdown"
            :class="['white--text','dropdown-toggle',{'blue-grey--text text--darken-3':itemMenu.id == idActiv}]"   
            flat style="text-transform:none"
            >{{itemMenu.name[language]}}
            <span v-if="itemMenu.dropdown" :class="{dropup:itemMenu.id == idActiv}">
              <span class="dropup-toggle"></span>
            </span>
          </v-btn>
          <router-link v-else tag="v-btn"
            flat class="white--text" style="background: #252697; border-style: hidden;"
            :to="itemMenu.url" >
            {{itemMenu.name[language]}}
          </router-link>
          <ul v-if="itemMenu.id == idActiv" class="menudown">
            <router-link 
              v-for="(item, index) in items" :key="index" 
              class="submenu ml-1 px-2 py-3 "
              exact :style="{ cursor: 'pointer'}"
              :to="item.url" tag="li" active-class="active" >
              <span class="blue--text">{{item.name[language]}}</span>
            </router-link>
          </ul>
        </li>
      </ul>
  </v-layout>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default{
  props: ['bisMenu','keyrand'],
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
    }),
  }
}
</script>

