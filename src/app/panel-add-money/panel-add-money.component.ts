import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WalletLogicService } from '../service/wallet-logic.service';
import { map } from 'rxjs';

import { getDatabase, ref, set } from "firebase/database";
import firebase from 'firebase/compat/app';
import { environment } from '../../environment';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-panel-add-money',
  templateUrl: './panel-add-money.component.html',
  styleUrls: ['./panel-add-money.component.css']
})
export class PanelAddMoneyComponent {
  walletAct:boolean = false;

  private addWallet = "https://ajay-bbdd1-default-rtdb.firebaseio.com/walletAddRequest.json";
  private UserWalletLink = "https://ajay-bbdd1-default-rtdb.firebaseio.com/users/";

  @ViewChild ('moany_trasfer') updatedata!:NgForm;

  AddFund=[
    {Time :'01/01/2023', Uid:'', Name:'Shree Ram', uemail:'', Contact:'876876876876', LiveWallet:'23',
    ReqAdd:'23', comment:'Fake Customer', status:'1w', Password:"", OldAccount:"", OldIFSC:"",
    REfferCode:"" },
  
  ]

  walletValue:any;
  Uid:any;
  Contact:any;
  Name:any;

    password:any;
    oldAccount:any;
    oldifsc:any;
    refferCode:any;
    UserEmail:any;


  tempurl:any;
  dataUserDel:any;

  alert:boolean = false;

  
  constructor(private _wallet_logic:WalletLogicService, private _http:HttpClient, private toastr: ToastrService){  }
  
  ngOnInit(){
    this.addMoneydata();

    this.dataUserDel;
    
  }





  // Get Details
  addMoneydata(){
    this._http.get(this.addWallet)
    .pipe(map(res=>{
      let data = Object.values(res);
      this.AddFund = data;

      console.log(data)
    }))
    .subscribe(res=>{
      console.log(res)
        this.walletAct = true;
      
    })

  }
  


  //Update details
  walletUpdate(){
    this.tempurl= this.UserWalletLink+this.Uid+".json";
    this._http.put(this.tempurl,
      {

        address : this.oldAccount,
        email : this.UserEmail,
        firstName : this.Name,
        password : this.password,
        paymentInfo : this.oldifsc,
        phoneNumber :this.Contact,
        post :"watiting",    // LAST NAME
        surName :this.refferCode,
        uid: this.Uid,
        
        walletAmount:this.walletValue,   // Two way data binding
      }
    )   
    .subscribe(res=>{
      console.log(res)
      this.alert = true;
      alert("Wallet update successfully");
      
    })
  }





  //Delete details
  delUSER(dataDel:any){
    console.log(dataDel);

  }



  //Edit USER 
  EditUSER(dataEdit:any){
    console.log();
    this.Uid = this.AddFund[dataEdit].Uid;
    this.Contact = this.AddFund[dataEdit].Contact;
    this.Name = this.AddFund[dataEdit].Name;
    this.password = this.AddFund[dataEdit].Password;
    this.oldAccount = this.AddFund[dataEdit].OldAccount
    this.oldifsc = this.AddFund[dataEdit].OldIFSC
    this.refferCode = this.AddFund[dataEdit].REfferCode
    this.UserEmail = this.AddFund[dataEdit].uemail 

    // this.status = this.AddFund[dataEdit].;

    this.updatedata.setValue({
      Name: this.AddFund[dataEdit].Name,
      Contact: this.AddFund[dataEdit].Contact,
      ReqAdd: this.AddFund[dataEdit].ReqAdd,
      LiveWallet: this.AddFund[dataEdit].LiveWallet,
      Time: this.AddFund[dataEdit].Time,

      password: this.AddFund[dataEdit].Password,
      AccountNo: this.AddFund[dataEdit].OldAccount,
      AcountIFSC: this.AddFund[dataEdit].OldIFSC,
      RefferCode: this.AddFund[dataEdit].REfferCode,
      userEmail: this.AddFund[dataEdit].uemail




    })
  }
}
