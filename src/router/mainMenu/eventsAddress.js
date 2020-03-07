/**
 * 
 * menu EVENTS 
 */
const Events = resolve => {
    require.ensure(['../../components/events/Events.vue'], () => {
        resolve(require('../../components/events/Events.vue'));
    });
};
const CalendarEvents = resolve => {
    require.ensure(['../../components/events/CalendarEvents.vue'], () => {
        resolve(require('../../components/events/CalendarEvents.vue'));
    });
};
const Seminars = resolve => {
    require.ensure(['../../components/events/seminars/Seminars.vue'], () => {
        resolve(require('../../components/events/seminars/Seminars.vue'));
    });
};
const Conferences = resolve => {
    require.ensure(['../../components/events/conferences/Conferences.vue'], () => {
        resolve(require('../../components/events/conferences/Conferences.vue'));
    });
};
const LecturesCech = resolve => {
    require.ensure(['../../components/events/lecturesCech/LecturesCech.vue'], () => {
        resolve(require('../../components/events/lecturesCech/LecturesCech.vue'));
    });
};
const Awards = resolve => {
    require.ensure(['../../components/events/awards/Awards.vue'], () => {
        resolve(require('../../components/events/awards/Awards.vue'));
    });
};
const Seminar = resolve => {
    require.ensure(['../../components/events/seminars/Seminar.vue'], () => {
        resolve(require('../../components/events/seminars/Seminar.vue'));
    });
};
const Conference = resolve => {
    require.ensure(['../../components/events/conferences/Conference.vue'], () => {
        resolve(require('../../components/events/conferences/Conference.vue'));
    });
};
export const EventsAddresses = [{
    path: '/events',
    name: 'events',
    component: Events,
    children: [
        { path: 'calendar', name: 'calendar', component: CalendarEvents },
        { path: 'seminars', name: 'seminars', component: Seminars },
        { path: 'conferences', name: 'conferences', component: Conferences },
        { path: 'lecturesCech', name: 'lecturesCech', component: LecturesCech },
        { path: 'awards', name: 'awards', component: Awards },
        { path: 'seminar/:id', name: 'seminar', component: Seminar },
        { path: 'conference/:id', name: 'conference', component: Conference },
    ]
}];