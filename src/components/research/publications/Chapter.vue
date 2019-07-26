<template>
<!-- chaper in monograph -->
<section>
  <span v-if="chapter.title_book">{{chapter.title_book}}</span>
  <span v-if="chapter.editors">,&nbsp;edited by:&nbsp;{{chapter.editors}} </span>
  <span v-if="chapter.serie_volume">,&nbsp;{{chapter.serie_volume}}</span>
  <span v-if="chapter.publisher">,&nbsp;{{chapter.publisher}}</span>
  <span v-if="chapter.address_publisher">,&nbsp;{{chapter.address_publisher}}</span>,&nbsp;
  <span v-if="year==2100">to appear</span>
  <span v-if="year < 2100">{{year}}</span>
  <span v-if="chapter.pages_from">,&nbsp;{{ chapter.pages_from}} </span>
  <span v-if="chapter.pages_to">-{{ chapter.pages_to}}.</span>
  </section>
</template>
<script>
export default {
  props:['chapter','year'],
}
</script>

