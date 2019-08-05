import Home from '../components/home/Home.vue';
const Members = resolve => {
  require.ensure(['../components/members/Members.vue'],() => {
    resolve(require('../components/members/Members.vue'));
  });
};
const Staff = resolve => {
  require.ensure(['../components/members/Staff.vue'],() => {
    resolve(require('../components/members/Staff.vue'));
  });
};
const Summary = resolve => {
  require.ensure(['../components/members/Summary.vue'],() => {
    resolve(require('../components/members/Summary.vue'));
  });
};
const Researchers = resolve => {
  require.ensure(['../components/members/researchers/Researchers.vue'],() => {
    resolve(require('../components/members/researchers/Researchers.vue'));
  });
};
const Researcher = resolve => {
  require.ensure(['../components/members/researcher/Researcher.vue'],() => {
    resolve(require('../components/members/researcher/Researcher.vue'));
  });
};
const Archive = resolve => {
  require.ensure(['../components/departments/Archive.vue'],() => {
    resolve(require('../components/departments/Archive.vue'));
  });
};
const Department = resolve => {
  require.ensure(['../components/departments/Department.vue'],() => {
    resolve(require('../components/departments/Department.vue'));
  },'department');
};
const DepartmentDetail = resolve => {
  require.ensure(['../components/departments/DepartmentDetail.vue'],() => {
    resolve(require('../components/departments/DepartmentDetail.vue'));
  },'department');
};
const Research = resolve => {
  require.ensure(['../components/research/Research.vue'],() => {
    resolve(require('../components/research/Research.vue'));
  });
};
const Publications = resolve => {
  require.ensure(['../components/research/publications/Publications.vue'],() => {
    resolve(require('../components/research/publications/Publications.vue'));
  });
};
const Grants = resolve => {
  require.ensure(['../components/research/grants/Grants.vue'],() => {
    resolve(require('../components/research/grants/Grants.vue'));
  });
};
const Grant = resolve => {
  require.ensure(['../components/research/grants/Grant.vue'],() => {
    resolve(require('../components/research/grants/Grant.vue'));
  });
};
import Events from '../components/events/Events.vue';
import Calendar from '../components/events/Calendar.vue';
import Seminars from '../components/events/Seminars.vue';
import Positions from '../components/positions/Positions.vue';
import ThesesTopics from '../components/positions/ThesesTopics.vue';
import Open from '../components/positions/Open.vue';
import Preprints from '../components/research/Preprints.vue';
import { resolve } from 'url';
import { resolveCname } from 'dns';

export default [
  {path: '/', name: 'home', component: Home} ,
  {path: '/members', name: 'members', component: Members, children:[
    {path:'researchers',name:'researchers', component: Researchers},
    {path:'researcher/:id',name:'researcher',component:Researcher},
    {path:'staff',name: 'staff', component: Staff},
    {path: 'summary', name: 'summary', component: Summary}
  ]} ,
  {path: '/events', name: 'events', component: Events, children: [
    {path: 'calendar', name: 'calendar', component: Calendar} ,
    {path: 'seminars', name: 'seminars', component: Seminars} ,
   ]} ,
  {path: '/positions', name: 'positions', component: Positions, children: [
    {path: 'open', name: 'open', component: Open} ,
    {path: 'thesetopics', name: 'thesetopics', component: ThesesTopics} ,
  ]} ,
  {path:'/department', name:'department', component: Department, children: [
    {path:'detail/:id',name:'detail',component:DepartmentDetail},
    {path: 'archive', name: 'archive', component: Archive} ,
  ]},
  {path:'/research', name:'research', component: Research, children: [
    {path:'publications/',name:'publications',component:Publications},
    {path:'preprints/',name:'preprints',component:Preprints}, 
    {path:'grants/',name:'grants',component:Grants}, 
    {path:'grant/:id',name:'grant',component:Grant},
  ]},
 
];