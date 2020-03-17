import { Component, OnInit, Input } from '@angular/core';
import { PassdataService} from '../passdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  
})
export class DetailsComponent {
  @Input() childMessage: string;
  constructor() {
    // console.log(this.childMessage);
  }
  printMessage(){
    return this.childMessage;
  }
  
  getData(e,p){
    return {"email":e,"pAdd":p};
  }


}
