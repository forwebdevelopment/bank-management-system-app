import { Routes } from '@angular/router';
import { Home } from './modules/home/home';

export const routes: Routes = [

    {path:'' , component:Home},
    {path:"home", component:Home},
    {path:'super-admin' , loadChildren:()=>import('../app/modules/super-admin/admin.route').then(m=>m.Admin_Routs)}
];
