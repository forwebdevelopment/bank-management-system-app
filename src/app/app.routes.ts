import { Routes } from '@angular/router';
import { Home } from './modules/home/home';

export const routes: Routes = [

    {path:'' , component:Home},
    {path:"home", component:Home},
    {path:'super-admin' , loadChildren:()=>import('../app/modules/super-admin/admin.route').then(m=>m.Admin_Routs)},
    {path:'branch-manager' , loadChildren:()=>import('../app/modules/branch-manager/branch-manager.route').then(b=>b.branch_manager)},
    {path:'branch-staff', loadChildren:()=>import('../app/modules/bank-staff/staff.routs').then(s=>s.staff_routs)},
    {path:'customer',loadChildren:()=>import('../app/modules/customer/customer.routs').then(b=>b.customerRouts)}
];
