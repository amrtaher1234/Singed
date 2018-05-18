import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {URLdata} from './URLdata'; 

@Injectable()
export class PhoneService {
public result ; 
public url: string = "http://apilayer.net/api/validate?access_key=cbef0ad6652c01cbf92fad0e5268c888&number="; 
public urldata : URLdata; 
constructor(private http: HttpClient) {

 }
getData(number : string)
{
  var temp = this.url+number; 
  //this.url += number; 
  return this.http.get(temp);
}
getFormatedData(number : string)
{
this.url+=number; 
return this.http.get(this.url).map( (data) => {
return data; 
});
}

// getDataFormated()
// {
//   return this.http.get(this.url).map(
//     result => {
//         let data = result;
//         this.result = data;
//         return data
//     })
// }
}
//14158586273