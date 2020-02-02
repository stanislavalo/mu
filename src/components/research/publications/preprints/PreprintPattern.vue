<template>
  <div class="pl-1">
    <a class="indigo--text text--darken-2 font-weight-bold" :href="preprint.url_preprint" target="_blanc">
      <v-layout xl12 align-start justify-start row fill-height >
        <div class="ml-3 mr-2">
          {{preprint.registrat_num}}
        </div>
        <div>
          <img  v-if="icon" src="../../../../assets/research/acrobat_icon.png" class="pl-1 pb-1">
          <span v-else class="body-1 purple--text text--purple-4 pl-1"> Download PDF</span>
        </div>
      </v-layout>
    </a>
    <span class="caption">Registered: {{preprint.date_preprint | dateEU('DD.MM.YYYY')}}</span>
  </div>
</template>
<script>
export default {
  props:['preprint','icon'],
}
</script>




