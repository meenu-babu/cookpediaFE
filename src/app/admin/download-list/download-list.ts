import { Component } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-download-list',
  standalone: false,
  templateUrl: './download-list.html',
  styleUrl: './download-list.css'
})
export class DownloadList {
  allDownloads:any=[]
  constructor(private api:Api){}
ngOnInit(){
  this.getAllDownloads()
}
  getAllDownloads(){
    console.log("i am entering download list")
    this.api.getAllDownloadsApi().subscribe((res)=>{
      console.log("All download list")
      console.log(res)
      this.allDownloads=res;
    })
  }

  

}
