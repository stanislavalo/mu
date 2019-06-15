import Home from './components/home/Home.vue';
import Staff from './components/members/Staff.vue';
import Summary from './components/members/Summary.vue';
import Researchers from './components/members/Researchers.vue';
import Members from './components/members/Members.vue';
import Events from './components/events/Events.vue';
import Calendar from './components/events/Calendar.vue';
import Seminars from './components/events/Seminars.vue';
import Positions from './components/positions/Positions.vue';
import ThesesTopics from './components/positions/ThesesTopics.vue';
import Open from './components/positions/Open.vue';
import Department from './components/departments/Department.vue';
import DepartmentDetail from './components/departments/DepartmentDetail.vue';


export const routes = [
  {path: '/', name: 'home', component: Home} ,
  {path: '/members', name: 'members', component: Members, children:[
    {path:'researchers',name: 'researchers', component: Researchers},
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
    {path:':id',name:'detail',component:DepartmentDetail}
  ]},
 
];