<template>
<!-- report -->
<section>
  <span v-if="report.institution">report.institution</span>,&nbsp;
  <span v-if="year==2100">to appear</span>
  <span v-if="year < 2100">{{year}}</span>
  </section>
</template>
<script>
export default {
  props:['report','year'],
}
</script>

