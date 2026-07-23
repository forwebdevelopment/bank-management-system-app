import { Component } from '@angular/core';
import { RoleHeader } from '../components/role-header/role-header';
import { SummaryCard } from '../components/summary-card/summary-card';
import { Roles } from '../components/roles/roles';
import { PermissionMatric } from '../components/permission-matric/permission-matric';
import { RoleDetials } from '../components/role-detials/role-detials';
import { RoleFooter } from '../components/role-footer/role-footer';

@Component({
  selector: 'app-role_permission',
  imports: [RoleHeader ,SummaryCard , Roles , PermissionMatric ,RoleDetials , RoleFooter],
  templateUrl: './role-and-permission.html',
  styleUrl: './role-and-permission.scss',
})
export class RoleAndPermission {}
