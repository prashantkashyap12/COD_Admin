import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { HttpClient } from '@angular/common/http';
import { getDatabase, ref, remove, set } from 'firebase/database';
import { ToastrService } from 'ngx-toastr';
// import { NgForm } from '@angular/forms';
// import { AngularFireDatabase } from '@angular/fire/compat/database';
// import firebase from 'firebase/compat/app';
// import { getDatabase, ref, set } from 'firebase/database';
// import { environment } from '../../environment';

@Component({
  selector: 'app-panel-live-user',
  templateUrl: './panel-live-user.component.html',
  styleUrls: ['./panel-live-user.component.css'],
})
export class PanelLiveUserComponent {
  userData: any;
  walletAmount: any;
  tempUid:any;
  tempwalllik:any
  constructor(private service: UserService, private _http:HttpClient, private toastr: ToastrService) {}


  ngOnInit() {
    this.getUser();
  }


  // update walllet in Profile LOGIC 
  // updateProVal(data:any){
  // console.log(this.walletupdate+this.tempUid+"/walletAmount.json);             TRY 1st
  //   this.tempwalllik = this.walletupdate+this.tempUid+"/walletAmount.json";
  //   console.log(this.tempwalllik);
  //   this._http.put(this.tempwalllik,data)
  //   .subscribe(res=>{
  //     console.log(res)
  //   })
  // }





//  Get Data
  getUser() {
    this.service.getData().subscribe((res) => {
      console.log(res, 'usersdata');
      this.userData = Object.entries(res).map((e) => e[1]);
    });
  }


  
  // Delete USER
  userDel(userId: string) {
    this.tempUid = userId;

    if(confirm("Do you want to delete this product " +userId)){
      const db = getDatabase();
      const dbRef = ref(db, 'users/' + userId);
      remove(dbRef)
      .then(() => {
        this.toastr.success('User Deleted Successfully');
        this.getUser();
      })
      .catch(() => {
        this.toastr.error('Error in User Delete');
      });
    }
    
  }
}
