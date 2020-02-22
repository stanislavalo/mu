<template>
  <div class="body-1">
    <p>{{$t("postdocs.university")}}: <br v-if="mdAndDown"/>{{university}}</p>
    <p>{{$t("postdocs.supervisor")}}:
      <span v-for="(supervisor, index) in supervisors" :key="index">
        <span v-if="index >0">,</span>
        {{supervisor.first_name}} {{supervisor.last_name}} 
        
      </span>
    </p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  props:['university','supervisors'],
  computed: {
    ...mapGetters('header',{
        language:'language',
        mdAndDown:'mdAndDown'
    })
  },
}
</script>