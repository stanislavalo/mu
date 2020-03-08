<template>
  <div>
    <div class="title lecture_title mb-1">
      {{lecture.ordinal_number}} Eduard Čech Lecture
    </div>
    <p class="ml-1">
      <span class="subheading  mb-1" v-html="lecture.first_name"></span>
      <span v-html="lecture.last_name" class="subheading  font-weight-bold "></span>
      <span class="body-1 pl-2 ">{{lecture.affiliation}}</span>
    </p>
    <p class="font-italic body-2 ml-1" v-html="lecture.title_lecture"></p>
    <div v-html="lecture.description" class="body-1 ml-1"></div>
</div>
</template>
<script>
export default {
  props:['lecture'],
}
</script>
<style scoped>

.lecture_title {
  
    letter-spacing: 1px;
}
</style> 