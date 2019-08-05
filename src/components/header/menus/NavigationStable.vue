<template>
 <v-layout wrap  style="background: #252697;">
    <v-spacer></v-spacer>
    <div style="background:#3949AB">
      <v-btn icon small class="mx-0 pa-0 " color="white">
        <v-img class="mx-0"
          :src="require('../../../assets/header/baseline-perm_identity-24px.svg')"
          min-height="24"
          max-height="24"
          contain>
        </v-img>
      </v-btn>  
      <v-btn icon small class="mr-3 pa-0 " @click="toggleLanguage">
        <v-img class="mx-0"
          :src="require('../../../assets/header/'+images[language])"
          min-height="13"
          max-height="13"
          contain>
        </v-img>
      </v-btn> 
    </div> 
  </v-layout>
</template>
<script>
// import actions from store
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  data(){
    return{
      images:['lang1.gif','gb.png']
    };
  },
  computed: {
    ...mapGetters({
        language:'language'
    })
  },
  methods:{
    ...mapActions({
        toggleLanguage:'toggleLanguage',
    }),
  }
}
</script>