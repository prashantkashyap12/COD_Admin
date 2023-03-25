import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-live-downloader',
  templateUrl: './live-downloader.component.html',
  styleUrls: ['./live-downloader.component.css']
})
export class LiveDownloaderComponent {

  private TempUser = 'https://ajay-bbdd1-default-rtdb.firebaseio.com/liveDownloader.json'

  @ViewChild('mainForm') any_trasfer!:NgForm;
  alertupdate:boolean = false;
  
  constructor(private _http:HttpClient){
  }

  ngOnInit(){ }
  download(data:NgForm){
    console.log(data);
    this._http.put(this.TempUser,data)
    .subscribe(res=>{
      console.log(res);
      this.alertupdate = true;
      alert("User update");


    })
  }

  edit(data:any){

    console.log(data);
    

  }

}
