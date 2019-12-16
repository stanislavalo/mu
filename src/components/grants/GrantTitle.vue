<template>
  <v-layout row wrap>
    <v-flex xs2 md12 lg12 xl12 pl-3 mx-0 px-0>
      <router-link :to="{name:'grant-detail',params:{id:item.id_grant}}" class="text--grey text--darken-3 pointer" tag="div">
        <v-img mt-2
          :src="require('../../assets/grants/G.png')"
          max-height="45"
          position="left"
          aspect-ratio="1.7"
          contain>
          <div hidden-xs-only class="text--grey text--darken-3 ml-3 pl-5">
            <p>{{item.number_grant}}</p>
            <p class="caption" >from {{item.from_date| dateEU('DD/MM/YYYY')}}&nbsp;&nbsp;to&nbsp;&nbsp;{{item.to_date| dateEU('DD/MM/YYYY')}}</p> 
          </div>
          </v-img>
      </router-link>
    </v-flex>
    <v-flex xs10 hidden-md-and-up > 
      <router-link :to="{name:'grant-detail',params:{id:item.id_grant}}" tag="div"
        class="text--grey text--darken-3 py-0 my-0">
          <p class=" pl-1 py-0" >{{item.number_grant}}</p>
          <p class="caption pl-1 py-0">from {{item.from_date}}&nbsp;&nbsp;to&nbsp;&nbsp;{{item.to_date}}</p> 
      </router-link>
    </v-flex>
    <v-flex xs12 pl-3 >
      <p class="caption  py-0"><span class="font-weight-bold ">Grantor:</span> {{item.grantor}}</p>
    </v-flex>
    <v-flex v-if="showTitle" xs12 pl-3>
      <router-link :to="{name:'grant-detail',params:{id:item.id_grant}}" tag="div" class="pointer blue--text text--darken-4 font-weight-medium">
      {{item.title}}
      </router-link>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props:['showTitle','item']
}
</script>