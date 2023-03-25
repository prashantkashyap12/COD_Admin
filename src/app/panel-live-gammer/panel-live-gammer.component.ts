import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
import { Database } from 'firebase/database';

@Component({
  selector: 'app-panel-live-gammer',
  templateUrl: './panel-live-gammer.component.html',
  styleUrls: ['./panel-live-gammer.component.css']
})
export class PanelLiveGammerComponent {


  private dateview = new Date();
  dataview:any = [
  ]
  dataChart:any = [
    {
      marketType:"Normal Game",
      marketNum:"12",
      marketAmount:"10",
    }
  ]
// Live Gammer Programming
private tempURL="https://ajay-bbdd1-default-rtdb.firebaseio.com/LiveGammer/";
userId:any;
mainURL="";
mainURL2:any;
constructor(private _http:HttpClient){
}
  ngOnInit(){
    this.mainURL=this.tempURL+".json"; 
    this.mainURL2=this.tempURL+"/pZcHhfW3mSeDC90Xor5lOcmWaTr2.json"; 
    this._http.get(this.mainURL)
    .pipe(map(res=>{
      for(const temp in res){
        this.mainURL=this.tempURL+temp+".json"; 
        console.log(this.mainURL);

        this._http.get(this.mainURL).subscribe(res=>{
          const dataWing = Object.values(res);
          this.dataview.push(...dataWing);
          console.log(this.dataview);
        })
      }
    }))
    .subscribe(res=>{
      
    })

  }



 tempArry:any = [
  {type:'Normal'}
 ];
 chartView:any = [];
 chart:any = [
  { amount: 11, num: 1, type: 'Bahar Haroof' }
 ];
  viewChart(data:any){
    this.tempArry = this.dataview[data].Game_Bat[0];
  }

}
