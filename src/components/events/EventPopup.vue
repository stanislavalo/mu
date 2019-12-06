<template>
  <v-card :max-width="maxWidth" >
    <v-card-text>
      {{message.startDate1}}
      <span v-if="message.startTime1 != '00:00'">{{message.startTime1}}</span>
        <br v-if="message.endDate1 != message.startDate1">
        <span v-if="message.endDate1 != message.startDate1">{{message.endDate1}} </span>
        <span v-if="message.endTime1 != '00:00'"> {{message.endTime1}}</span>
        <h4 class=" mx-0 my-0">{{message.place}}</h4>
    </v-card-text>
    <h2 class="title ml-3 my-0">{{message.speaker}}</h2>
    <v-card-title primary-title class="my-0 pt-0 pb-3">
      
        <h4 class="headline mb-0">{{ message.title }}</h4>
        <div class="event-text"> {{ message.text }} </div>
      
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  props:['message'],
  data(){
    return {
      maxWidth:"100%",
    }
  }   
}
</script>
<style  scoped>
.event-text{
  text-align: justify
}
</style>