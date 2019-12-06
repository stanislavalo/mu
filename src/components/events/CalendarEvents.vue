<template>
  <v-container class="ma-0 pa-0" fluid >
    <v-layout xs12  row  wrap class="mx-0 px-0" black--text>
      <v-flex v-if="message.id" sm12 md3 lg3 xl3  >
        <div id="up" :style="messageStyle" :class="messageClasses">
          <event-popup :message="message"></event-popup>
        </div>
      </v-flex>
      <v-flex grow>
        <div class="calendar-parent "> 
        <!-- header select period   calendar-parent-max-heigh--> 
        <div  class="cv-header-nav">
          <div class="control ma-0 caption">
            <label class="mt-1 caption">Period:</label>
            <div class="select">
              <select v-model="displayPeriodUom">
                <option>month</option>
                <option>week</option>
              </select>
            </div>
          </div>
          </div>
          <div hidden class="cv-header-nav">
            <div class="control ma-0 caption">
              <label class="mt-1 caption">Starting day:</label>
              <div class="select " >
                <select v-model="startingDayOfWeek">
                  <option v-for="(d, index) in dayNames" :value="index" :key="index">{{ d }}</option>
                </select>
              </div>
            </div>
          </div>  
        <calendar-view
          :events="events"
          :show-date="showDate"
          :time-format-options="{hour: 'numeric', minute:'2-digit'}"
          :enable-drag-drop="true"
          :disable-past="disablePast"
          :disable-future="disableFuture"
          :show-event-times="showEventTimes"
          :display-period-uom="displayPeriodUom"
          :display-period-count="displayPeriodCount"
          :starting-day-of-week="1"
          :class="themeClasses"
          :period-changed-callback="periodChanged"
          :current-period-label="useTodayIcons ? 'icons' : ''"
          :month-name-format="'short'"
          @drop-on-date="onDrop"
          @click-date="onClickDay"
          @click-event="onClickEvent"
        >
          <calendar-view-header 
            slot="header"
            slot-scope="{ headerProps }"
            :header-props="headerProps"
            @input="setShowDate"
          />
        </calendar-view> 
        
      </div>
      </v-flex>
    </v-layout>
  </v-container>
    
  
</template>
<script>
import 'bulma/css/bulma.css';

import eventsLarge from '../../data/events/calendar/eventsLarge.js';
import eventsSmall1 from '../../data/events/calendar/eventsSmall.js';
import EventPopup from './EventPopup.vue';
require("vue-simple-calendar/static/css/default.css");
require("vue-simple-calendar/static/css/holidays-us.css");
import {
    CalendarView,
    CalendarViewHeader,
    CalendarMathMixin,
} from "vue-simple-calendar";
// kalendar end
export default {
  data() {
    var events = eventsLarge;
    return{
      fluidContenair:true,
      /* Show the current month, and give it some fake events to show */
      showDate: this.thisMonth(1),
      message: {},
      startingDayOfWeek: 0,
      disablePast: false,
      disableFuture: false,
      displayPeriodUom: "month",
      displayPeriodCount: 1,
      showEventTimes: true,
      newEventTitle: "",
      newEventStartDate: "",
      newEventEndDate: "",
      useDefaultTheme: true,
      useHolidayTheme: false,
      useTodayIcons: false,
      events: events,
    }
  },
  computed: {
		userLocale() {
			return this.getDefaultBrowserLocale
		},
		dayNames() {
			return this.getFormattedWeekdayNames(this.userLocale, "long", 1)
    },
    messageClasses(){
      if(this.$vuetify.breakpoint.mdAndUp){
        return "mt-5 pt-5";
      }
      else
        return "mt-0 pt-0";
    },
    messageStyle(){ 
      var style = {
        borderLeftColor: this.message.color,
        borderLeftStyle: 'groove',
        borderLeftWidth: '1em',
      };
      return style;
    },
		themeClasses() {
			return {
				"theme-default": this.useDefaultTheme,
				"holiday-us-traditional": this.useHolidayTheme,
				"holiday-us-official": this.useHolidayTheme,
			}
		},
	},

  mounted () {
    this.fluidContenair = this.$vuetify.breakpoint.lgAndDown;
    this.newEventStartDate = this.isoYearMonthDay(this.today());
    this.newEventEndDate = this.isoYearMonthDay(this.today());
    if(this.$vuetify.breakpoint.smAndDown){
      this.events = eventsSmall1;
    }
    else{
      this.events = eventsLarge;
    } 
  },
  components:{
    CalendarView,
    CalendarViewHeader,
    EventPopup
  },
  mixins: [CalendarMathMixin],
  
	methods: {
		periodChanged(range, eventSource) {
			// Demo does nothing with this information, just including the method to demonstrate how
			// you can listen for changes to the displayed range and react to them (by loading events, etc.)
			console.log(eventSource)
			console.log(range)
		},
		thisMonth(d, h, m) {
			const t = new Date()
			return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
		},
		onClickDay(d) {
			this.message = `You clicked: ${d.toLocaleDateString()}`
    },
		onClickEvent(e) {
      var date1 = new Date(e.originalEvent.startDate1);
      var date2 = new Date(e.originalEvent.endDate1);
      
      this.message = {
        id:e.id,
        title:e.title,
        speaker:e.originalEvent.speaker,
        text:e.originalEvent.text,
        startDate1:date1.toLocaleDateString('en-GB'),
        startTime1:date1.toLocaleTimeString('en-GB',{hour12:false, hour: '2-digit', minute:'2-digit'}),
        endDate1:date2.toLocaleDateString('en-GB'),
        endTime1:date2.toLocaleTimeString('en-GB',{hour12:false, hour: '2-digit', minute:'2-digit'}),
        place:e.originalEvent.place,
        color:e.originalEvent.classes
      }
      if(this.message.endDate1 == this.message.startDate1){
        if(this.message.endTime1 == this.message.startTime1){
          this.message.endTime1 = '00:00';
        }
        else{ 
           this.message.endTime1 = '-' + this.message.endTime1;
        }
      }
      scroll(0, 50);
    },
		setShowDate(d) {
			this.message = `Changing calendar view to ${d.toLocaleDateString()}`
			this.showDate = d
		},
		onDrop(event, date) {
			this.message = `You dropped ${event.id} on ${date.toLocaleDateString()}`
			// Determine the delta between the old start date and the date chosen,
			// and apply that delta to both the start and end date to move the event.
			const eLength = this.dayDiff(event.startDate, date)
			event.originalEvent.startDate = this.addDays(event.startDate, eLength)
			event.originalEvent.endDate = this.addDays(event.endDate, eLength)
		},
		clickTestAddEvent() {
			this.events.push({
				startDate: this.newEventStartDate,
				endDate: this.newEventEndDate,
				title: this.newEventTitle,
				id:
					"e" +
					Math.random()
						.toString(36)
						.substr(2, 10),
			})
			this.message = "You added an event!"
		},
	},
}
</script>

<style scoped>
html,
body {
	height: 100%;
	margin: 0;
	background-color: #f7fcff;
}
.calendar-controls {
	margin-right: 1rem;
	min-width: 14rem;
	max-width: 14rem;
  background-color: beige;
}
.calendar-parent {
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-x: hidden;
	overflow-y: hidden;
  min-height: 85vh;
	background-color: white;
  height: 100%;
  height: -moz-available;          
  height: -webkit-fill-available; 
  height: fill-available;
}
/* .calendar-parent-max-heigh{
  max-height: 155vh;
} */
/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
	min-height: 6rem;
}
.theme-default .cv-event{
  height: auto !important; 
}
/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */
/* Add some styling for events tagged with the "birthday" class */
.theme-default .cv-event.birthday {
	background-color: #e0f0e0;
	border-color: #d7e7d7;
}
.theme-default .cv-event.birthday::before {
	content: "\1F382"; /* Birthday cake */
	margin-right: 0.5em;
}
.control-period {
    display: flex;
    flex: 0 0 auto;
    flex-flow: row nowrap;
    align-items: center;
    min-height: 2.5em;
    border-width: 1px 1px 0 1px;
}
.event-text{
  text-align: justify;
}
</style>

