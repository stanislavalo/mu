<template>
  <div>
    <p>
    Supervisors : 
    <span v-for="(item, index) in supervisor" :key="index"
      :class="{'indigo--text text--darken-2':item.type}">
        {{item.name_last}} {{item.name_first}}
        <span v-if="index <   supervisor.length - 1">,</span>
    </span>
    </p>
    <p v-if="defence.available">
      <span class="font-weight-bold"> Defense:</span>
      {{defence.date| dateEU('DD.MM.YYYY')}}<span v-if="defence.place">,&nbsp;&nbsp;({{defence.place}})</span>
    </p>
    <p v-else>
      Defense not available.
    </p>

  </div>
</template>
<script>
export default {
  props:['supervisor','defence'],
}
</script>