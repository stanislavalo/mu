// addresses from BD - TODO
import { dynamicExternalAddresses } from './helpers/dynamicExternalAddress.js';
//main menu
import { PeopleAddresses } from './mainMenu/peopleAddresses.js';
import { ResearchAddresses } from './mainMenu/researchAddresses.js';
import { EventsAddresses } from './mainMenu/eventsAddress.js';
import { AboutAddresses } from './mainMenu/aboutAddresses.js';
// bis menu
import { DepartmentsAddresses } from './bisMenu/departmentsAddresses.js';
import { GrantsAddresses } from './bisMenu/grantsAddresses.js';
import { LibraryAddresses } from './bisMenu/libraryAddresses.js';

/**
 * menu HOME, NEWS
 */
const NewsHome = resolve => {
    require.ensure(['../components/home/NewsHome.vue'], () => {
        resolve(require('../components/home/NewsHome.vue'));
    });
};
const NewDetail = resolve => {
    require.ensure(['../components/home/NewDetail.vue'], () => {
        resolve(require('../components/home/NewDetail.vue'));
    });
};
const News = resolve => {
    require.ensure(['../components/home/News.vue'], () => {
        resolve(require('../components/home/News.vue'));
    });
};

const addresses = [{
        path: '/',
        name: 'home',
        component: News,
    },
    {
        path: '/news',
        name: 'newshome',
        component: NewsHome,
        children: [
            { path: 'news', name: 'news', component: News },
            { path: 'new/:id', name: 'new', component: NewDetail },
        ]
    },
    {
        path: '/positions',
        name: 'positions',
        beforeEnter() { location.href = 'https://application.math.cas.cz/Positions' },
    },
    {
        path: "*",
        component: News
    },
];
const allRoutes = addresses.concat(
    dynamicExternalAddresses, //extern addresses from BD
    PeopleAddresses, // main menu people
    ResearchAddresses, // main menu research
    EventsAddresses, // main menu events
    AboutAddresses, // main menu about
    DepartmentsAddresses, // bis menu departments
    LibraryAddresses, // bis menu library
    GrantsAddresses, // bis menu grants
);

// import { resolve } from 'url';
// import { resolveCname } from 'dns';

export default allRoutes