import { Component, OnInit , Input } from '@angular/core';
import {URLdata} from '../URLdata'; 

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  @Input() urldata ; 
  constructor() {}

  ngOnInit() {
  }

  test()
  {
    console.log(this.urldata); 
  }
}
