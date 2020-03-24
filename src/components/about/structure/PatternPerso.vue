<template>
  <div>
    <p> 
      <span :class="[index == 0?'title':'subheading']" 
        class="orange--text text--darken-4 mr-2">{{item.function[language]}}
      </span>
      <br v-if="smAndDown">
      <span :class="{'title':index == 0}" class="font-weight-bold " v-html="item.name"> </span>
    </p>
    <p v-if="item.title" >  {{item.title}} </p>
    <p v-if="item.address">Address: <span  v-html="item.address"></span> </p>
    <p v-if="item.tel">Tel. {{item.tel}}  </p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  props: ['item','index'],
  computed:{
    ...mapGetters('header',{
      smAndDown:'smAndDown',
      language:'language',
    })
  }
}
</script>