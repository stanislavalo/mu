<template>
  <v-layout>
    <v-flex  xs12  xs offset-sm3-xl0>
      <div class="ma-0 pa-1 headline blue--text text--darken-4 ">Grant detail for ID={{id}}</div>
    </v-flex>
  </v-layout>  
</template>
<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
    }
  },
}
</script>
