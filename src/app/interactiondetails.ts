import { SourceSystemDetail } from './source-system-detail';
import { Notifications } from './notifications';
import { Interaction } from './interaction';
 
export class InteractionDetails {
 
    interactions : Interaction[];
    paging : String;
    highestSeverity : String;
    notifications : Notifications;
 
}