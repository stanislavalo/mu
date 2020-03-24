<<template>
<v-container fluid>
    <v-layout row wrap class="mb-2 mx-1">
      <v-flex xs12 class="mb-1">
        <span class="title blue--text text--darken-4 ml-3">{{ $t("structure.administration") }}</span>
      </v-flex>
      <app-administration></app-administration>
    </v-layout>
    <v-layout row wrap class="mb-2 mx-1">
      <v-flex xs12 >
        <p class="ml-0" @click="openBoard = !openBoard">
          <span class="title blue--text text--darken-4 ">{{ $t("structure.boardint") }}</span>
          <img v-if="!openBoard" class="mr-1" src="../../../assets/departments/outline-expand_more-24px.svg">
          <img v-else class="mr-1" src="../../../assets/departments/outline-expand_less-24px.svg">   
        </p>
        <app-international-board v-if="openBoard" ></app-international-board>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-2 mx-1">
      <v-flex xs12 >
        <p v-if="smAndDown"  class="ml-0" @click="openHeads = !openHeads">
           <span class="title blue--text text--darken-4 ">{{ $t("structure.heads") }}</span>
          <img v-if="!openFacilities" class="mr-1" src="../../../assets/departments/outline-expand_more-24px.svg">
          <img v-else class="mr-1" src="../../../assets/departments/outline-expand_less-24px.svg">   
        </p>
        <span v-else class="title blue--text text--darken-4 ">{{ $t("structure.heads") }}</span>
        <app-heads-departments v-if="openHeads" ></app-heads-departments>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mb-2 mx-1">
      <v-flex xs12 >
        <p v-if="smAndDown"  class="ml-0" @click="openFacilities = !openFacilities">
          <span class="title blue--text text--darken-4 ">{{ $t("structure.facilities") }}</span>
          <img v-if="!openFacilities" class="mr-1" src="../../../assets/departments/outline-expand_more-24px.svg">
          <img v-else class="mr-1" src="../../../assets/departments/outline-expand_less-24px.svg">   
        </p>
        <span v-else class="title blue--text text--darken-4 ">{{ $t("structure.facilities") }}</span>
        <app-facilities v-if="openFacilities"></app-facilities>
      </v-flex>
    </v-layout>
   </v-container>
</template>
<script>
import administration from './Administration.vue';
import facilities from './Facilities.vue';
import headsDepartment from './HeadDepartment.vue';
import internationalBoard from './InternationalBoard.vue';
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      openFacilities:false,
      openBoard:false,
      openHeads:false,
    };
  },
  computed:{
    ...mapGetters('header',{
      smAndDown:'smAndDown'
    })
  },
  created(){
    if(!this.smAndDown){
      this.openFacilities = true;
      this.openHeads=true;
    }
      
  },
  components:{
    AppAdministration:administration,
    AppFacilities:facilities,
    AppInternationalBoard:internationalBoard,
    AppHeadsDepartments:headsDepartment,

  }
}
</script>