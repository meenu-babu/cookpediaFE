import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../services/api';

@Component({
  selector: 'app-profile',
  imports: [Header,Footer],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  profileImage:string="https://static.vecteezy.com/system/resources/previews/024/983/914/large_2x/simple-user-default-icon-free-png.png";


  constructor(private api:Api){}

  ngOnInit(){
    const user=JSON.parse(sessionStorage.getItem('user')||"")
    if(user.profilePic){
      this.profileImage=user.profilePic;
    }
  }
  getFile(event:any){
    let uploadedFile=event.target.files[0]
    // alert(uploadedFile)
    let fr=new FileReader()
    fr.readAsDataURL(uploadedFile);
    fr.onload=(event:any)=>{
      this.profileImage=event.target.result;
    }

  }


  uploadProfilePic(){
this.api.editUserApi({profilePic:this.profileImage}).subscribe((res:any)=>{
  sessionStorage.setItem('user',JSON.stringify(res));
  this.profileImage=res.profilePic;
  alert("Profile pic uploaded successfully")
})
  }

}
