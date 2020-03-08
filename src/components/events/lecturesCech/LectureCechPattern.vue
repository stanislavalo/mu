<template>
   <div class="my-3 py-0 orange--text">
    <span class="body-1 font-weight-bold "> 
      {{getDate()|dateEU('D MMMM YYYY')}} 
      </span> 
  </div>
</template>
<script>
export default {
  props:['date_lecture'],
  methods: {
    getDate(){
      let dlecture = null;
      const sub = this.date_lecture.split('/');
      dlecture = sub[2]+'-'+sub[1]+'-'+sub[0];
      return dlecture;
    }
  },
}
</script>