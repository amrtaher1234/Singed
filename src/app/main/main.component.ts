import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {PhoneService} from '../phone.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {URLdata} from '../URLdata'; 
import {DatabaseService } from '../database.service'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public urldata ; 
  public email ;
  public formated_data ; // this is a map retrieved to be passed to another object.
  public phonenumber : string; 
  constructor(private phoneservice : PhoneService , private databaseservice : DatabaseService) { }

  ngOnInit() {
    this.urldata = new URLdata(); 

  }

  callAPI(number:string)
  {
    this.phoneservice.getData(this.phonenumber).subscribe(data => { 
    this.urldata.carrier = data['carrier']; 
    this.urldata.valid = data['valid'];
    this.urldata.country_code = data['country_code']; 
    this.urldata.country_name = data['country_name']; 
    this.urldata.country_prefix = data['country_prefix']; 
    this.urldata.international_format = data['international_format']; 
    this.urldata.line_type = data['line_type']; 
    this.urldata.local_format = data['local_format']; 
    this.urldata.location = data['location']; 
    this.phoneservice.urldata = this.urldata; 
    this.formated_data = this.urldata.getDataAsArray(); 
    console.log(this.urldata); 
    this.email=''; 
    this.phonenumber=''; 
    if (data['valid'] == true || data['valid'] ==1)
    this.databaseservice.pushData(this.formated_data);
     
    }
  );
  }
  // getFormatedData()
  // {
  //  console.log (this.phoneservice.getFormatedData("14158586273"));
  // }
}
