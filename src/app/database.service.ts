import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireObject,AngularFireList, snapshotChanges   } from "angularfire2/database"; 
import {Observable} from 'rxjs'; 
import { Time } from "@angular/common";


@Injectable()
export class DatabaseService {

  DatabaseLink : AngularFireList <any[]>; 
  List : Observable<any[]>; 
  constructor(public db : AngularFireDatabase) {
    this.DatabaseLink = this.db.list('/History'); 
   }

   pushData(data) // here i recieve from other components the data to be pushed
   {
     this.DatabaseLink.push(data); 
   }

   getData()
   {
     return this.db.list('/History').valueChanges(); 
   }
}
