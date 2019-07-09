<template>
  <div>{{ $t("department.archiv") }}</div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters({
        language:'language',
    })
  } 
}
</script>
