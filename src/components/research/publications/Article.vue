<template>
<!-- Article -->
  <section>
    <span v-if="article.journal">{{article.journal}}</span>
    <span v-if="article.volume" class="font-weight-bold"> {{article.volume}}</span>
    <span v-if="article.number" >({{article.number}})</span>
    <span v-if="article.volume">,</span>
    <span v-if="year==2100">to appear</span>
    <span v-if="year < 2100">{{year}}</span>
    <span v-if="article.pages_from">,&nbsp;{{article.pages_from}} </span>
    <span v-if="article.pages_to">-{{article.pages_to}}.</span>
  </section>
</template>
<script>
export default {
  props:['article','year'],
}
</script>

