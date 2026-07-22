import { Component, viewChild } from '@angular/core';
import { UserManagementHeader } from '../components/user-management-header/user-management-header';
import { Userchard } from '../components/userchard/userchard';
import { Userlist } from '../components/userlist/userlist';
import { Actions } from '../components/action/action';
import { UserDetails } from '../components/user-details/user-details';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-user-management',
  imports: [UserManagementHeader ,Userchard, Userlist , Actions , UserDetails],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss',
})
export class UserManagement {
@ViewChild(UserDetails) userdetails!:UserDetails
isSeeUserDetials:boolean = false;

opendetials(obje:any){
  this.isSeeUserDetials = true
}
closeDetails(){
    this.isSeeUserDetials = false;
}


}
