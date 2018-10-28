import { Injectable } from '@angular/core';
import {  Http,Response } from '@angular/http';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class InteractionService {
 
  constructor(private http: Http) { }
  contactId :string;
  url:string;
 
  buildServiceURL(id : any)
  {
    console.log("inside service--->" + id);
    this.contactId=id;
    this.url=" http://localhost:8086/InteractionInquiryService/getInteractionDetailsByPartyID/"+this.contactId+"";
 
  }
 
  getInteractionDetails():Observable<any> {
    return this.http.get(this.url)
    .pipe(map((response:Response) => response.json()));
 
    }
 
}