import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interactionservice.service';
import { InteractionDetails } from '../interactiondetails';
import { Interaction } from '../interaction';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private interactionService: InteractionService) { 

  }
 
  ngOnInit() {
  }
  interactioninfo: InteractionDetails;
  intList : Interaction[];
  submit : Boolean;
 
 
   getContactId( id : any){
    this.submit = true;
 
     console.log("contactID--->" +id)
     // forming URL
     this.interactionService.buildServiceURL(id);
 
     // calling service
     this.interactionService.getInteractionDetails()
       .subscribe(interactionInfo => {
         this.interactioninfo = interactionInfo;
         this.intList =this.interactioninfo.interactions;

 
        
      }
       );
   }
 
   // Sample data
   contacts= [
 
    {"contactId":"contactId_1",
    "interactionType":"GENERAL",
    "interactionSubType":"claim_subtype",
    "interactionTimestamp":"2018-10-16T11:01:10.000+0000",
    "communicationType":"EMAIL",
    "communicationValue":"test@fedex.com",
    "sourceSystemDetail":{"sourceSystem":"IVR",
    "sourceSystemId":"USRC",
    "sourceSystemRefIdType":"ACCT_NBR",
    "sourceSystemRefId":"sourceSystemRefId0"},
    "comment":"contact_Id interaction 1",
    "domain":"interactions",
    "majorVersion":0,
    "minorVersion":1},
    {"contactId":"contactId_1",
    "interactionType":"GENERAL",
    "interactionSubType":"claim_subtype",
    "interactionTimestamp":"2018-10-16T11:01:10.000+0000",
    "communicationType":"EMAIL",
    "communicationValue":"test@fedex.com",
    "sourceSystemDetail":{"sourceSystem":"IVR",
    "sourceSystemId":"USRC",
    "sourceSystemRefIdType":"ACCT_NBR",
    "sourceSystemRefId":"sourceSystemRefId0"},
    "comment":"contact_Id interaction 1",
    "domain":"interactions",
    "majorVersion":0,
    "minorVersion":1},
    {"contactId":"contactId_1",
    "interactionType":"GENERAL",
    "interactionSubType":"claim_subtype",
    "interactionTimestamp":"2018-10-16T11:01:10.000+0000",
    "communicationType":"EMAIL",
    "communicationValue":"test@fedex.com",
    "sourceSystemDetail":{"sourceSystem":"IVR",
    "sourceSystemId":"USRC",
    "sourceSystemRefIdType":"ACCT_NBR",
    "sourceSystemRefId":"sourceSystemRefId0"},
    "comment":"contact_Id interaction 1",
    "domain":"interactions",
    "majorVersion":0,
    "minorVersion":1},
    {"contactId":"contactId_1",
    "interactionType":"GENERAL",
    "interactionSubType":"claim_subtype",
    "interactionTimestamp":"2018-10-16T11:01:10.000+0000",
    "communicationType":"EMAIL",
    "communicationValue":"test@fedex.com",
    "sourceSystemDetail":{"sourceSystem":"IVR",
    "sourceSystemId":"USRC",
    "sourceSystemRefIdType":"ACCT_NBR",
    "sourceSystemRefId":"sourceSystemRefId0"},
    "comment":"contact_Id interaction 1",
    "domain":"interactions",
    "majorVersion":0,
    "minorVersion":1},
    {"contactId":"contactId_1",
    "interactionType":"GENERAL",
    "interactionSubType":"claim_subtype",
    "interactionTimestamp":"2018-10-16T11:01:10.000+0000",
    "communicationType":"EMAIL",
    "communicationValue":"test@fedex.com",
    "sourceSystemDetail":{"sourceSystem":"IVR",
    "sourceSystemId":"USRC",
    "sourceSystemRefIdType":"ACCT_NBR",
    "sourceSystemRefId":"sourceSystemRefId0"},
    "comment":"contact_Id interaction 1",
    "domain":"interactions",
    "majorVersion":0,
    "minorVersion":1}
]
}