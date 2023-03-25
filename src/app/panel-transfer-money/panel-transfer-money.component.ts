import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Component({
  selector: 'app-panel-transfer-money',
  templateUrl: './panel-transfer-money.component.html',
  styleUrls: ['./panel-transfer-money.component.css']
})
export class PanelTransferMoneyComponent {

  @ViewChild ('moany_trasfer') updatedata!:NgForm;
  private  withdWallet = "https://ajay-bbdd1-default-rtdb.firebaseio.com/walletWithdRequest.json"; 
  private UserWalletLink = "https://ajay-bbdd1-default-rtdb.firebaseio.com/users/";

  walletAct:boolean = false;


  updateWallet:any;
  tempURL:any;
  Old_AC:any;
  U_Email:any;
  U_Name:any;
  U_Pwd:any;
  Old_IFSC:any;
  U_contact:any;
  U_REfferCode:any;
  Uid:any;
  WalletAmount:any;

  constructor(private _http:HttpClient){
  }
  ngOnInit(){
    this.dataGetData();
    console.log(this.updateWallet)
  }

  AddFund=[
    {Uid:'ASDFASD987123987', LiveTime:'01/01/2023', Name:'Shree Ram', Contact:'876876876876', 
    OldAccount:'',OldIFSC:'',Password:'',REfferCode:'',uemail:'',
    Account_No:'023123481234', Account_IFSC:'ALLA0001234', LiveWallet:'123', Account_WithReq:'23',
    comment:'Fake Customer', status:'1w' }
  ]
  

  // Get Data
  dataGetData(){
    this._http.get(this.withdWallet)
    .pipe(map(res=>{
      let data = Object.values(res)  
      this.AddFund = data;
      console.log(this.AddFund);      // check new node object
    }))
    .subscribe(res=>{
    })
  }

  //Update details
  moneyTrans(){
    this.tempURL= this.UserWalletLink+this.Uid+".json";
    console.log(this.tempURL);
    this._http.put(this.tempURL,{
       address : this.Old_AC,
       email : this.U_Email,
       firstName : this.U_Name,
       password : this.U_Pwd,
       paymentInfo : this.Old_IFSC,
       phoneNumber :this.U_contact,
       post :"",    // LAST NAME
       surName :this.U_REfferCode,
       uid: this.Uid,
       walletAmount:this.WalletAmount,   // Two way data binding
    })
    .subscribe(res=>{
      console.log(res);
      alert("Wallet update");
      this.walletAct = true


    })
  }

  //Delete details
  delUSER(dataDel:any){
    confirm('Do you want to delete this user - '+this.AddFund[dataDel].Name)
    {
      this.AddFund.splice(dataDel, 1);
    }
  }
 



  //Edit USER 
  EditUSER(dataEdit:any){
    this.Old_AC = this.AddFund[dataEdit].OldAccount;
    this.Old_IFSC = this.AddFund[dataEdit].OldIFSC;
    this.U_Email = this.AddFund[dataEdit].uemail;
    this.U_Pwd = this.AddFund[dataEdit].Password;
    this.U_Name = this.AddFund[dataEdit].Name;
    this.U_contact = this.AddFund[dataEdit].Contact;
    this.U_REfferCode = this.AddFund[dataEdit].REfferCode;
    this.Uid = this.AddFund[dataEdit].Uid;
    this.WalletAmount = this.AddFund[dataEdit].LiveWallet;
    this.updatedata.setValue({
    Name: this.AddFund[dataEdit].Name,
    Contact: this.AddFund[dataEdit].Contact,
    Account_No: this.AddFund[dataEdit].Account_No,
    Account_IFSC: this.AddFund[dataEdit].Account_IFSC,
    LiveWallet: this.AddFund[dataEdit].LiveWallet,
    Account_WithReq: this.AddFund[dataEdit].Account_WithReq,
    LiveTime: this.AddFund[dataEdit].LiveTime,
    Email: this.AddFund[dataEdit].uemail,
    Reffer_Code: this.AddFund[dataEdit].REfferCode,
    Password_Code: this.AddFund[dataEdit].Password,
    Old_Account: this.AddFund[dataEdit].OldAccount,
    Old_Account_IFSC: this.AddFund[dataEdit].OldIFSC,
  })

  }
}
