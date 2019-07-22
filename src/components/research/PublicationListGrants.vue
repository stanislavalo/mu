<template>
<div>
  <section @click="getPublicationGrants"> 
    <img src="../../assets/research/icon_grants.png" class="pl-1">
    <img  v-if="toggleDown"  src="../../assets/research/down.png" class="pt-1 pl-0">
    <img v-else src="../../assets/research/up.png" class="pt-1 pl-0">
  </section>
  <ul v-if="!toggleDown" class="pl-1">
    <li v-for="(item,index) in grants" :key="index">{{item}}</li>
  </ul>
</div>
</template>
<script>
export default {
  data(){
    return{
      grants:['GJ19-07129Y','GJ18-07129Z','GJ17-07129X'],
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

