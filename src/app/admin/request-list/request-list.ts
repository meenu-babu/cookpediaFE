import { Component } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-request-list',
  standalone: false,
  templateUrl: './request-list.html',
  styleUrl: './request-list.css'
})
export class RequestList {
allFeedback:any=[]
constructor(private api:Api){}
ngOnInit(){
  this.getAllFeedBack()
}
getAllFeedBack(){
  this.api.getAllFeedbackApi().subscribe((res)=>{
    console.log("All feedback")
    console.log(res)
    this.allFeedback=res
  })
}

updateFeedback(id:any,status:string){

  this.api.updateFeedbackStatusApi(id,status).subscribe((res)=>{
      this.getAllFeedBack()
  })
}
}
