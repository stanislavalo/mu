 <template>
   <v-layout :key="keyrand" wrap style="background: #252697" class="hidden-md-and-down pa-0 ma-0">
    <!----------Main menu---line------------->
    <v-flex  grow class=" ma-0 pa-0"> 
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="white--text"
            v-on="on"
            v-for="(itemMenu, index) in mainMenu" 
            :key="index" flat
            @click="items = itemMenu.items">{{itemMenu.name}}
          </v-btn>
        </template> 
        <v-list :items="items">
          <v-list-tile v-for="(item, index) in items" :key="index">
            <v-list-tile-title>{{ item }}</v-list-tile-title>
          </v-list-tile>
        </v-list> 
      </v-menu>  
      <v-spacer></v-spacer>
    </v-flex>
  </v-layout> 
    
 </template>
<script>
export default{
  props: ['mainMenu','keyrand'],
  data() {
    return {
      items:[],
    }
  },
  methods:{
    clickItem(items){ 
      console.log(items);
      this.items= items;
    },
  }
}
</script>
