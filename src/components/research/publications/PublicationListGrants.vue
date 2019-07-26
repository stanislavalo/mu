<template>
<div>
  <section @click="getPublicationGrants"> 
    <img src="../../../assets/research/icon_grants.png" class="pl-1">
    <img  v-if="toggleDown"  src="../../../assets/research/down.png" class="pt-1 pl-0">
    <img v-else src="../../../assets/research/up.png" class="pt-1 pl-0">
  </section>
  <ul v-if="!toggleDown" class="pl-1">
    <router-link v-for="(item,index) in grants" :key="index" 
      :to="{name:'grant',params:{id:item.id_grant}}"  tag="li">
    {{item.name}}
    </router-link>
  </ul>
</div>
</template>
<script>
export default {
  props:['grants'],
  data(){
    return{
      toggleDown:true,
    }
  },
  methods:{
    getPublicationGrants() {
      this.toggleDown = !this.toggleDown;
      return this.grants;
    }
  }
}
</script>

