<template>
<!--paper in proceeding -->
  <section>
    <span>in Proceedings of the {{inproceeding.conference_name}},&nbsp;{{inproceeding.place}}</span>
    <span v-if="inproceeding.date_from">,&nbsp;{{  inproceeding.date_from}} </span>
    <span v-if="inproceeding.date_to">&nbsp;-&nbsp;{{  inproceeding.date_to}}</span>
    <span v-if="inproceeding.editors">,&nbsp;editor(s):&nbsp;{{ inproceeding.editors}} </span>
    <span v-if="inproceeding.title_book">,&nbsp;{{ inproceeding.title_book}}</span>
    <span v-if="inproceeding.publisher">,&nbsp;{{ inproceeding.publisher}}</span>
    <span v-if="inproceeding.address_publisher">,&nbsp;{{ inproceeding.address_publisher}}</span>,&nbsp;
    <span v-if="year==2100">to appear</span>
    <span v-if="year < 2100">{{year}}</span>
    <span v-if="inproceeding.pages_from">,&nbsp;{{  inproceeding.pages_from}} </span>
    <span v-if="inproceeding.pages_to">-{{  inproceeding.pages_to}}</span>
  </section>
</template>
<script>
export default {
  props:['inproceeding','year'],
}
</script>

