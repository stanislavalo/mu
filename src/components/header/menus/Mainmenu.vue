 <template>
   <v-layout :key="keyrand"  style="background: #252697" class="hidden-md-and-down pa-0 ma-0">
    <!----------Main menu---line------------->
    <v-flex grow class=" ma-0 pl-2"> 
      <ul class="nav nav-pills">
        <li v-for="(itemMenu, index) in mainMenu"
          :class="[ {'dropup':itemMenu.id == idActiv}, {'white':itemMenu.id == idActiv}]" 
          :key="index" flat 
          @click="setSubmenu(itemMenu)">
          <v-btn v-if="itemMenu.dropdown"
            :class="['dropdown-toggle','white--text',
              {'blue-grey--text text--darken-3':itemMenu.id == idActiv}]"   
            flat
            data-toggle="dropdown" 
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
      <v-spacer></v-spacer>
    </v-flex>
  </v-layout>  
 </template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default{
  props: ['mainMenu','keyrand'],
  computed: {
    ...mapGetters('header',{
        items:'items',
        showItems:'showItems',
        idActiv:'idActiv',
        language:'language',
    })
  },
  methods:{
    ...mapActions('header',{
        setSubmenu: 'setSubmenu',
    }),
  }
}
</script>
