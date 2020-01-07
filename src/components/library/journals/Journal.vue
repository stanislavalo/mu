<<template>
  <div>
    Journal {{title}}
  </div>
</template>
<<script>
export default {
  data() {
    return {
      title:null,
    }
  },
  created(){
    this.title = this.$route.params.title;
  }
}
</script>