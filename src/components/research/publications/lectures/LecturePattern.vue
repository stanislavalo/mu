<template>
  <div >
    <span class="body-1 font-weight-bold pl-1"> {{lecture.month+'-01-'+lecture.year|dateEU('MMMM YYYY')}}
      </span>
    <a :href="lecture.filepdf" target="_blanc">
      <v-layout xl12 align-start justify-start row fill-height >
        <div v-if="lecture.filepdf" >
          <img  v-if="icon" src="../../../../assets/research/acrobat_icon.png" class="ml-3 pl-1 pb-1">
          <span v-else class="body-1 purple--text text--purple-4 ml-3 pl-1"> Download PDF</span>
        </div>
      </v-layout>
    </a>
  </div>
</template>
<script>
export default {
  props:['lecture','icon'],
}
</script>




