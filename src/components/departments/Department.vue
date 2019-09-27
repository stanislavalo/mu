<template>
  <router-view :key="$route.fullPath" class="col-lg-12  col-cen"></router-view>
</template>
<style scoped>
.col-cen{
    float: none;
    margin: 0 auto;
}
</style>