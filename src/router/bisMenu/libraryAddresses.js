/**
 * 
 * menu LIBRARY
 */
const Library = resolve => {
    require.ensure(['../../components/library/Library.vue'], () => {
        resolve(require('../../components/library/Library.vue'));
    });
};
const LibraryIns = resolve => {
    require.ensure(['../../components/library/library/LibraryIns.vue'], () => {
        resolve(require('../../components/library/library/LibraryIns.vue'));
    });
};
const Resources = resolve => {
    require.ensure(['../../components/library/resources/Resources.vue'], () => {
        resolve(require('../../components/library/resources/Resources.vue'));
    });
};
const Journal = resolve => {
    require.ensure(['../../components/library/journals/Journal.vue'], () => {
        resolve(require('../../components/library/journals/Journal.vue'));
    });
};
export const LibraryAddresses = [{
    path: '/library',
    name: 'library',
    component: Library,
    children: [
        { path: 'library', name: 'libraryins', component: LibraryIns },
        { path: 'resources', name: 'resources', component: Resources },
        { path: 'journal/:title', name: 'journal', component: Journal }
    ]
}];