<template>
  <v-container fluid>
    <v-layout row wrap class="mb-2 mx-1">
    <v-flex xs12 >
      <span class="headline blue--text text--darken-4 ">{{ $t("staff.title") }}</span>
      </v-flex>
    </v-layout>
    <v-layout  row wrap class="my-0 mx-1">
        <v-flex v-for="(item, index) in staff" :key=index xs12 sm12 md6 lg4 xl3 class="my-1" >
          <v-card tile  elevation=3 min-width=100%>
            <div class=" title pb-1 ml-3 mt-1 ">{{item.last_name}}
              <span class="subheading font-weight-bold">{{item.first_name}}</span>
              <a :href="'mailto:' + item.per_email">
                <svg style="width:24px;height:24px" viewBox="0 0 24 28">
                  <path fill="currentColor" d="M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z" />
                </svg>
              </a>
              <div v-if="item.title" class="row body-2 font-weight-regular ml-0 mt-1 grey--text text--darken-2">{{item.title}}</div>
              <div v-else-if="!smAndDown" class="row body-2 font-weight-regular ml-0 mt-1 grey--text text--darken-2">
                &nbsp;
              </div>
              <div class="row body-2 font-weight-regular ml-0 mt-1 grey--text text--darken-2">{{item.function}}</div>
            </div>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container> 
</template>
<script>
import {mapGetters} from 'vuex';
// import data
import members from '../../data/members';
export default {
  data(){
    return {
      staff:[],
      getSpace:false,
    }
  },
  created: function() {
    var staffData = [];
    members.forEach(function(element) {
      if(element.status.activ && element.type.staff){
        staffData.push(element);
      }
    });
    this.staff = staffData;
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
        smAndDown:'smAndDown'
    }),
  },
}
</script>
<style>
div.summary{
  border-bottom: 3px solid rgba(224,224,224, 0.6);
}
 
</style>
