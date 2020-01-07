/**
 * 
 * menu ABOUT
 */
const About = resolve => {
    require.ensure(['../../components/about/About.vue'], () => {
        resolve(require('../../components/about/About.vue'));
    });
};
const Contact = resolve => {
    require.ensure(['../../components/about/contact/Contact.vue'], () => {
        resolve(require('../../components/about/contact/Contact.vue'));
    });
};
const Documents = resolve => {
    require.ensure(['../../components/about/documents/Documents.vue'], () => {
        resolve(require('../../components/about/documents/Documents.vue'));
    });
};
const Mission = resolve => {
    require.ensure(['../../components/about/mission/Mission.vue'], () => {
        resolve(require('../../components/about/mission/Mission.vue'));
    });
};
const Structure = resolve => {
    require.ensure(['../../components/about/structure/Structure.vue'], () => {
        resolve(require('../../components/about/structure/Structure.vue'));
    });
};
export const AboutAddresses = [{
    path: '/about',
    name: 'about',
    component: About,
    children: [
        { path: 'contact', name: 'contact', component: Contact },
        { path: 'documents', name: 'documents', component: Documents },
        { path: 'mission', name: 'mission', component: Mission },
        { path: 'structure', name: 'structure', component: Structure },
    ]
}];