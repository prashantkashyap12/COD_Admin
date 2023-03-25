import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { map } from 'rxjs';
import { OldResultService } from '../service/old-result.service'; 

// import { FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-panel-old-result',
  templateUrl: './panel-old-result.component.html',
  styleUrls: ['./panel-old-result.component.css']
})
export class PanelOldResultComponent {
    
  constructor(private _result:OldResultService, private _http:HttpClient ){}

  @ViewChild ('OldResult') dataMaain!:NgForm;

  editMode:boolean=false;

  alertupdate:boolean=false;
  alertfatch:boolean=false;
  alertadd:boolean=false;


  tempDataId:any;
  postUrl:any;
  private OldRecord = 'https://ajay-bbdd1-default-rtdb.firebaseio.com/Old_Records/'


  // mainData:any;
  mainData:any = [
  ]
  
  // mainData:any;
  tempArry:any = [
  ]



  
// GET API Mathord
ngOnInit(){
}

//NEW Record API
datasub(data:NgForm){ 
  this.postUrl = this.OldRecord+this.condiyear+"/"+this.condimonth+"/"+this.condimarket+".json";
  console.log(this.postUrl);
  this.mainData.push(data);
  this._http.put(this.postUrl,this.mainData).subscribe(res=>{
    console.log(res)
    this.alertadd = true


  })
}
 
// Update Record
updateValue(data:NgForm){
  console.log(data);
  console.log(this.postUrl);
  this.tempArry.push(data)
  this._http.put(this.postUrl,this.tempArry).subscribe(res=>{
    console.log(res);
    this.alertupdate = true
  })
}


// FATCH API Mathord
  FatchValue(){
    this.postUrl = this.OldRecord+this.condiyear+"/"+this.condimonth+"/"+this.condimarket+".json";
    console.log(this.postUrl);
    this._http.get(this.postUrl)
    .subscribe(res=>{
      const data = JSON.stringify(res);
      this.mainData = JSON.parse(data);
      console.log(this.mainData);
      this.alertfatch = true;
    })
  }

  // Edit API
  dataEdit(userId:any){
    this.editMode = true;
    this.dataMaain.setValue({
      month: this.mainData[userId].month,
      year:this.mainData[userId].year,
      market:this.mainData[userId].market,
      A1: this.mainData[userId].A1,
      A2:this.mainData[userId].A2,
      A3:this.mainData[userId].A3,
      A4:this.mainData[userId].A4,
      A5:this.mainData[userId].A5,
      A6:this.mainData[userId].A6,
      A7:this.mainData[userId].A7,
      A8:this.mainData[userId].A8,
      A9:this.mainData[userId].A9,
      A10:this.mainData[userId].A10,
      A11:this.mainData[userId].A11,
      A12:this.mainData[userId].A12,
      A13:this.mainData[userId].A13,
      A14:this.mainData[userId].A14,
      A15:this.mainData[userId].A15,
      A16:this.mainData[userId].A16,
      A17:this.mainData[userId].A17,
      A18:this.mainData[userId].A18,
      A19:this.mainData[userId].A19,
      A20:this.mainData[userId].A20,
      A21:this.mainData[userId].A21,
      A22:this.mainData[userId].A22,
      A23:this.mainData[userId].A23,
      A24:this.mainData[userId].A24,
      A25:this.mainData[userId].A25,
      A26:this.mainData[userId].A26,
      A27:this.mainData[userId].A27,
      A28:this.mainData[userId].A28,
      A29:this.mainData[userId].A29,
      A30:this.mainData[userId].A30,
      A31:this.mainData[userId].A31
    })
  }

  // Delete API 
  dataDel(userId:any){
    if(confirm("Do you want to delete this product "+userId)){
      console.log(userId);
      this.mainData.splice(userId,1);
      this._http.delete(this.postUrl,userId).subscribe(res=>{
        console.log(res);
      })
    }
  }

 
  // Without API
  condiyear:string = "2022";
  condimonth:string = "Feb";
  condimarket:string = "Banda_Express";  
  getyear(year:any){
    this.condiyear = year.value;
  }
  getmonth(month:any){
    this.condimonth = month.value;
  }
  getmarket(market:any){
    this.condimarket = market.value;
  }
}
 