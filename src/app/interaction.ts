import { SourceSystemDetail } from './source-system-detail';
import { Notifications } from './notifications';


export class Interaction {
 
    contactId : String;
    interactionType : String;
    interactionSubType : String;
    interactionTimestamp : String;
    communicationType : String;
    communicationValue : String;
    comment : String;
    sourceSystemDetail : SourceSystemDetail;
 
   
}