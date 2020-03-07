<template>
  <div>
    Conference detail, id = {{id}}

  </div>
</template>
<script>
export default {
  data(){
    return{
     id: this.$route.params.id,
    };
  },
}
</script>