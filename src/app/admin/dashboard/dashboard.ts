import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from '../../services/api';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {


  isSideBarOpen:boolean=true;
column_width:string="col-lg-10"
userCount:number=0;
recipeCount:number=0;
downloadCount:number=0;
requestCount:number=0;
selected=new Date();
constructor(private router:Router,private api:Api){}

ngOnInit(){
  this.getUserCount();
  this.getRecipeCount();
  this.getNewRequestCount();
  this.getDownloadCount();
}
  menuBtnClick(){
    this.isSideBarOpen=!this.isSideBarOpen;
    this.isSideBarOpen?this.column_width='col-lg-10':this.column_width='col-lg-12'
  }
  logoutAdmin(){
    sessionStorage.clear();
    this.router.navigateByUrl('/')
  }

  //get all users
  getUserCount(){
    this.api.getAllUsersApi().subscribe((res:any)=>{
      if(res && res.length >0)
      {
        this.userCount=res.length
      }
      else{
        this.userCount=0
      }
    })
  }

  //get all recipe count
  getRecipeCount(){
    this.api.getAllRecipesApi().subscribe((res:any)=>{
      if(res && res.length >0)
      {
        this.recipeCount=res.length
      }
      else{
        this.recipeCount=0
      }
    })
  }

  //get new request count
  getNewRequestCount(){
    this.api.getAllFeedbackApi().subscribe((res:any)=>{
      this.requestCount=res.filter((item:any)=>item.status==='Pending'.length)

    })
  }


  //get download count
  getDownloadCount(){
    this.api.getAllDownloadsApi().subscribe((res:any)=>{
      //here we have to find total sum of count from each response
      this.downloadCount=res.map((item:any)=>item.count).reduce((a:any,b:any)=>a+b)
    })
  }
}
