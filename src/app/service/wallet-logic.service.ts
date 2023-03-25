import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WalletLogicService {

  private  addWallet = "https://ajay-bbdd1-default-rtdb.firebaseio.com/walletAddRequest.json";
  private  withdWallet = "https://ajay-bbdd1-default-rtdb.firebaseio.com/walletWithdRequest.json"; 
  constructor(private _http:HttpClient) { }
  
  addWalletGet(){
    return this._http.get(this.addWallet);
  }


  

}
