<template>
  <section>
     <span v-for="(author,index) in   authors" :key="index" 
        :class="{'indigo--text text--darken-2':author.type}">
        {{author.name_last}} {{author.name_first}}
        <span v-if="index <   authors.length - 1">,</span>
      </span> 
    </div>
    <div class="font-italic">{{title.name}}</div>
    </section>
</template>
<script>
export default {
  props:['authors','title']
}
</script>