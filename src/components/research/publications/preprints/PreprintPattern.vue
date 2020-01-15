<template>
  <div class="pl-1">
    <a class="indigo--text text--darken-2 font-weight-bold" :href="url_preprint" target="_blanc">
      <v-layout xl12 align-start justify-start row fill-height >
        <div class="ml-3 mr-2">
          {{registrat_num}}
        </div>
        <div>
          <v-img v-if="imagepdf"
            alt="preprint"
            src='/src/assets/research/acrobat_icon.png' class="ma-0"
            height="18"
            width="18">
          </v-img>
          <span v-else class="body-1 purple--text text--purple-4 pl-1"> Download PDF</span>
        </div>
      </v-layout>
    </a>
    <span class="caption">Registered: {{date_preprint}}</span>
  </div>
</template>
<script>
export default {
  props:['url_preprint','date_preprint','registrat_num','imagepdf'],
}
</script>




