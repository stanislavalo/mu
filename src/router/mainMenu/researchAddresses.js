/**
 * 
 * menu RESEARCH 
 */
const Research = resolve => {
    require.ensure(['../../components/research/Research.vue'], () => {
        resolve(require('../../components/research/Research.vue'));
    });
};
const Publications = resolve => {
    require.ensure(['../../components/research/publications/Publications.vue'], () => {
        resolve(require('../../components/research/publications/Publications.vue'));
    });
};
const Lectures = resolve => {
    require.ensure(['../../components/research/publications/lectures/Lectures.vue'], () => {
        resolve(require('../../components/research/publications/lectures/Lectures.vue'));
    });
};
const Collaboration = resolve => {
    require.ensure(['../../components/research/collaboration/Collaboration.vue'], () => {
        resolve(require('../../components/research/collaboration/Collaboration.vue'));
    });
};
export const ResearchAddresses = [{
    path: '/research',
    name: 'research',
    component: Research,
    children: [
        { path: 'publications/', name: 'publications', component: Publications },
        { path: 'lectures/', name: 'lectures', component: Lectures },
        { path: 'collaboration/', name: 'collaboration', component: Collaboration },
    ]
}];