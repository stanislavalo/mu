<template>         
  <v-card tile  elevation=3  min-width=100%>
    <div :class="[detail ? 'headline' : 'subheading','ml-3', 'mt-1',
      detail ? 'font-weight-regular' : 'font-weight-bold' ]" >
      <span v-if="detail" class="blue--text text--darken-4">{{item.field_seminar_title_value}}  </span>
      <router-link v-else :to="{name:'seminar',params:{id:item.entity_id}}" class="blue--text text--darken-4">
          {{item.field_seminar_title_value}} 
      </router-link>
      <p class="body-2 font-weight-regular pt-1">
        <span v-if="detail" class="pr-1">usually takes place </span> 
        <span :class="{'font-weight-bold':detail}">{{item.field_usualy_date_seminar_value}}</span>
      </p>
      <div  class="row body-2 font-weight-regular ml-0 mt-1 grey--text text--darken-2">
        {{item.field_usualy_place_seminar_value}}
      </div>
      <p class="row body-2 font-weight-bold ml-0 mt-1 ">
        <span v-if="detail"  v-html="getChair"></span>
        <span v-else>{{item.field_chairmen_valu}}</span>
      </p>
      <div v-if="detail" v-html="item.text" 
        class="row body-2 font-weight-regular ml-0 mr-1 pt-0 mt-0 justify">
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props:{
    item:{
      type:Object,
    },
    detail:{
      type:Boolean,
      default:false,
    }
  },
  data(){
    return{
      getChair:'Chair: '+this.item.field_chairmen_value,
    }
  }
}
</script>
<style scoped>
.justify {
  text-align: justify;
}
.date{
  border-left-color: orange;
  border-left-width: 2pt;
  border-left-style:groove;
}
</style>