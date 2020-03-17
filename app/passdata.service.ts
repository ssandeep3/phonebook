import { Injectable } from '@angular/core';
import {AppComponent} from '../app/app.component'
import { DetailsComponent } from './details/details.component';
import {PhoneDiary} from './model';


@Injectable({
  providedIn: 'root'
})
export class PassdataService {
  counter  = 1;
  ac = new AppComponent();
  diary = [];
  addRec(n,p,e,a){
    this.diary.push(new PhoneDiary(n,p,e,a));
    console.log(this.diary);
    this.counter += 1;
  }
  getTotal(){
    return this.diary.length;  
  }
  
  constructor() {}
}
