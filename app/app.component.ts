import { Component, EventEmitter, Output } from '@angular/core';
import { PhoneBook, PhoneDiary } from './model';

// @Output() myEvent = new EventEmitter();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // template: `<app-details [childMessage] = "parentMessage"></app-details>`
})
export class AppComponent {
  @Output() myEvent = new EventEmitter();
  title = "Sandeep's PhoneBook";
  parentMessage = "Hello";
  counter  = 1;
  dispRec = {"name":"","number":""}
  pb = [new PhoneBook("Sandeep","9812345678")];
    
  // getName(){
  //   return this.phonebook.name;
  // }
  addRecord(n,p,e,a){
    this.pb.push({"name":n,"number":p});
    console.log(this.pb);
    this.counter +=  1;
  }
  dispRecord(n,p){
    n.value = this.pb[0].name;
    p.value = this.pb[0].number;
    this.counter = 1;

  }
  load_details(){
    console.log("Details Clicked");
  }
  getCurrent(){
    return this.counter;
  }
  getTotal(){
    return this.pb.length;
    
  }
  public show: boolean = true;
  toggle() {
      this.show = !this.show;
      return this.show;
  }
  
  function2(){
    this.myEvent.emit(null);
  }
  getData(n,num){
    const f=this.function2();
    f.


    return {"name":n,"number":num,"email":e,"pAdd":p};
  }
}
