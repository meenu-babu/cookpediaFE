import { Component } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

  allUsers:any=[];
  constructor(private api:Api){}
  ngOnInit(){
    this.getAllUsers()
  }
  getAllUsers(){
    this.api.getAllUsersApi().subscribe((res)=>{
      console.log("All usr list")
      console.log(res)
      this.allUsers=res;
    })
  }

}
