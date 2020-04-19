<template>
  <div>    
    <v-divider v-if="pastList" class="my-2"></v-divider>
    <div v-if="pastList" class="headline">Past Reports</div>
    <div class=" my-2" v-for="(item, index) in list" :key="index" >
      <a :href="docurl" target="_blanc" @click="geturl(item.id_rapport)" class="black--text">
        <div class="pb-1" >
          <span :class="[pastList ? 'body-2' : 'title']" >{{item.title}}</span>
          <span class="body-2 blue--text text--darken-4 pl-1">Download PDF</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props:['pastList','list']
}
</script>