<template>
<!-- book -->
<section>
  <span v-if="book.publishing_house">{{book.publishing_house}}</span>,&nbsp;
  <span v-if="year==2100">to appear</span>
  <span v-if="year < 2100">{{year}}</span>
  </section>
</template>
<script>
export default {
  props:['book','year'],
}
</script>

