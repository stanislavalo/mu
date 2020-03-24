<template>
   <v-flex xs12 class="subheading black--text font-weight-regular">
     <v-card  v-for="(item, index) in departmentsData" :key="index" 
      elevation="1" class="mx-0 mb-3" width="100%">
      <v-card-title> 
        <div>
          <p> 
            <span class="orange--text text--darken-4 mr-2">{{item.name[language]}}</span>
          </p>
          <p>
            {{item.head.first_name}}
            <span class="font-weight-bold ">{{item.head.last_name}} </span>
            <a :href="'mailto:'+per_email" >
              <svg style="width:20px;height:20px" viewBox="0 0 24 28">
                <path fill="black" d="M4,8L12,13L20,8V8L12,3L4,8V8M22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V8C2,7.27 2.39,6.64 2.97,6.29L12,0.64L21.03,6.29C21.61,6.64 22,7.27 22,8Z" />
              </svg>
            </a>
          </p>
          <p>Tel.: {{item.head.tel}} </p>
          
        </div>
      </v-card-title>
     </v-card>
   </v-flex>
</template>
<script>
import departmentsData from '../../../data/departments.js';
import {mapGetters} from 'vuex';
export default {
  data(){
    return {
      departmentsData:departmentsData,
      per_mail:"xxx@math.caz.cz",
    };
  },
  computed:{
    ...mapGetters('header',{
      smAndDown:'smAndDown',
      language:'language',
    })
  }
}
</script>
<style scoped>

</style>