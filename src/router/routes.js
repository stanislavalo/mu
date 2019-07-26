import Home from '../components/home/Home.vue';
import Staff from '../components/members/Staff.vue';
import Summary from '../components/members/Summary.vue';
import Researchers from '../components/members/researchers/Researchers.vue';
import Researcher from '../components/members/researcher/Researcher.vue';
import Members from '../components/members/Members.vue';
import Events from '../components/events/Events.vue';
import Calendar from '../components/events/Calendar.vue';
import Seminars from '../components/events/Seminars.vue';
import Positions from '../components/positions/Positions.vue';
import ThesesTopics from '../components/positions/ThesesTopics.vue';
import Open from '../components/positions/Open.vue';
import Department from '../components/departments/Department.vue';
import Archive from '../components/departments/Archive.vue';
import DepartmentDetail from '../components/departments/DepartmentDetail.vue';
import Research from '../components/research/Research.vue';
import Publications from '../components/research/publications/Publications.vue';
import Preprints from '../components/research/Preprints.vue';
import Grants from '../components/research/grants/Grants.vue';
import Grant from '../components/research/grants/Grant.vue';

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