/**
 * 
 * menu GRANTS 
 */
const Grants = resolve => {
    require.ensure(['../../components/grants/Grants.vue'], () => {
        resolve(require('../../components/grants/Grants.vue'));
    });
};
const GrantsList = resolve => {
    require.ensure(['../../components/grants/Grants.vue'], () => {
        resolve(require('../../components/grants/GrantsList.vue'));
    });
};
const GrantDetail = resolve => {
    require.ensure(['../../components/grants/GrantDetail.vue'], () => {
        resolve(require('../../components/grants/GrantDetail.vue'));
    });
};
export const GrantsAddresses = [{
    path: '/grants',
    name: 'grants',
    component: Grants,
    children: [
        { path: 'list/:type', name: 'grant-type', component: GrantsList },
        { path: 'detail/:id', name: 'grant-detail', component: GrantDetail },
    ]
}, ];