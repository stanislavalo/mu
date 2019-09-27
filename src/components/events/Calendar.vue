<template>
  <v-content>
    <v-calendar :value="value" :now="now" ref="calendar" type="month" :events="events" :event-color="getEventColor">
      <!-- -->
    </v-calendar>
  </v-content>
</template>
<script>
export default {
  data() { 
    const date = new Date()

    return {
      value: 'august',
      now: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
      events: [
        {
          name: 'test',
          start: '2019-08-29 01:00:19',
          end: '2019-08-30 21:00',
          color: 'red'
        }
      ]
    }
  },
  mounted() {
    console.log(this.$refs.calendar.days[0])
  },
  methods: {
    getEventColor(event) {
      return event.color
    }
  }

}
</script>
