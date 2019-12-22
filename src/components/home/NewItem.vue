<template>
  <div class="px-0 pb-3">
    <new-title-card v-if="getIsFirst(item.isFirst)" 
      :item = "item" :getIsFirst="getIsFirst" :detail="detail">
    </new-title-card>
    <router-link v-else :to="{name:'new',params:{id:item.id}}" >
      <new-title-card :item = "item" :getIsFirst="getIsFirst" :detail=false></new-title-card>
    </router-link>  
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import newTitleCard from './NewTitleCard.vue';

export default {
  props:['item','detail'],
  components:{
    newTitleCard:newTitleCard
  },
  computed: {
    ...mapGetters('header',{
        language:'language',
        mdAndDown:'mdAndDown',
    })
  },
  methods:{ 
    getIsFirst(isFirst){
      return isFirst
    },
  }
}
</script>