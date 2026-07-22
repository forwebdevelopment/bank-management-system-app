import { Component } from '@angular/core';
import { UserManagementHeader } from '../components/user-management-header/user-management-header';
import { Userchard } from '../components/userchard/userchard';
import { Userlist } from '../components/userlist/userlist';

@Component({
  selector: 'app-user-management',
  imports: [UserManagementHeader ,Userchard, Userlist],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss',
})
export class UserManagement {}
