/**
 * 
 * menu DEPARTMENTS
 */
const Department = resolve => {
    require.ensure(['../../components/departments/Department.vue'], () => {
        resolve(require('../../components/departments/Department.vue'));
    }, 'department');
};
const DepartmentDetail = resolve => {
    require.ensure(['../../components/departments/DepartmentDetail.vue'], () => {
        resolve(require('../../components/departments/DepartmentDetail.vue'));
    }, 'department');
};

export const DepartmentsAddresses = [{
    path: '/department',
    name: 'department',
    component: Department,
    children: [
        { path: 'detail/:id', name: 'detail', component: DepartmentDetail },
    ]
}];