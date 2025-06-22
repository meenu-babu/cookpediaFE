import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
isLoggedIn=false;
loginUserName=""
constructor(private router:Router){}
ngOnInit(){
  if(sessionStorage.getItem('token')){
    const userTemp:any=sessionStorage.getItem('user');
    this.isLoggedIn=true;
    this.loginUserName=JSON.parse(userTemp).username;
  }
  else{
    this.isLoggedIn=false;
    this.loginUserName=""
  }
}

logoutUser(){
  sessionStorage.clear()
  this.isLoggedIn=false;
  this.loginUserName="";
  this.router.navigateByUrl('/')
}
}
