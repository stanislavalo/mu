/**
 * 
 * menu PEOPLE
 */
const Members = resolve => {
    require.ensure(['../../components/members/Members.vue'], () => {
        resolve(require('../../components/members/Members.vue'));
    });
};
const Staff = resolve => {
    require.ensure(['../../components/members/Staff.vue'], () => {
        resolve(require('../../components/members/Staff.vue'));
    });
};
const Researchers = resolve => {
    require.ensure(['../../components/members/researchers/Researchers.vue'], () => {
        resolve(require('../../components/members/researchers/Researchers.vue'));
    });
};
const Researcher = resolve => {
    require.ensure(['../../components/members/researcher/Researcher.vue'], () => {
        resolve(require('../../components/members/researcher/Researcher.vue'));
    });
};
const Postdocs = resolve => {
    require.ensure(['../../components/members/postdocs/Postdocs.vue'], () => {
        resolve(require('../../components/members/postdocs/Postdocs.vue'));
    });
};
const distinguishedVisitors = resolve => {
    require.ensure(['../../components/members/visitors/DistinguishedVisitors.vue'], () => {
        resolve(require('../../components/members/visitors/DistinguishedVisitors.vue'));
    });
};
const Visitors = resolve => {
    require.ensure(['../../components/members/visitors/Visitors.vue'], () => {
        resolve(require('../../components/members/visitors/Visitors.vue'));
    });
};
export const PeopleAddresses = [{
        path: '/members',
        name: 'members',
        component: Members,
        children: [
            { path: 'researchers', name: 'researchers', component: Researchers },
            { path: 'researcher/:id', name: 'researcher', component: Researcher },
            { path: 'postdocs', name: 'postdocs', component: Postdocs },
            { path: 'staff', name: 'staff', component: Staff },
            { path: 'distinguishedVisitors', name: 'distinguishedVisitors', component: distinguishedVisitors },
            { path: 'visitors', name: 'visitors', component: Visitors }
        ]
    },

]