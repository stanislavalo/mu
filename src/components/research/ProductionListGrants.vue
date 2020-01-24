<template>
<div :class="[{ grants: !toggleDown }, nogrants]">
  <section @click="getProductionGrants">
    <span  v-if="icon">
      <img src="../../assets/research/icon_grants.png" class="pl-1">
      <img  v-if="toggleDown"  src="../../assets/research/down.png" class="pt-1 pl-0">
      <img v-else src="../../assets/research/up.png" class="pt-1 pl-0">
    </span>
    <span v-else class="grant caption font-weight-bold">Grants
      <span  v-if="toggleDown" class="pt-1 px-1 ">+</span>
      <span v-else class="pt-1 px-1 font-weight-bold subheading">-</span>
    </span>  
  </section>
  <ul v-if="!toggleDown" class="pl-1">
    <li v-for="(item,index) in grants" :key="index" >
      <a v-if="item.url" :href="item.url">{{item.name}}</a>
    <router-link v-else
      :to="{name:'grant',params:{id:item.id_grant}}"  tag="a">
    {{item.name}}
    </router-link>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  props:['grants','icon'],
  data(){
    return{
      toggleDown:true,
    }
  },
  methods:{
    getProductionGrants() {
      this.toggleDown = !this.toggleDown;
      return this.grants;
    }
  }
}
</script>
<style scoped>
.grants{
  background-color:bisque
}
.nogrants{
  background-color: white
}
.grant {
  border: 1px solid  #303f9f;
  padding: 2px;
  border-radius: 4px;
}
</style>

