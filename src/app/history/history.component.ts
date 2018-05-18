import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import {PhoneService} from '../phone.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {URLdata} from '../URLdata'; 
import {DatabaseService } from '../database.service'; 
import {AngularFireDatabase, AngularFireObject,AngularFireList, snapshotChanges   } from "angularfire2/database"; 

// 4.12.0
// "^5.0.0-rc.6"
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public historyData  ;
  public 
  public ff ; 
  constructor(private dataservice : DatabaseService , private db:AngularFireDatabase) { }

  ngOnInit() {
   this.RetrieveData(); 
  }

  RetrieveData()
  {
   (this.dataservice.getData()).subscribe(data => this.historyData = data); 

 }
  
  }

