<template>
<!-- lecture content -->
  <section>
    <p>{{conference.title}}</p>
    <p>{{conference.address}} ({{month+'-01-'+year|dateEU('MMMM YYYY')}})</p>
  </section>
</template>
<script>
export default {
  props:['month','year','conference'],
}
</script>
