import { contactform } from '../src/app/models/contactform.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
contactform: contactform;
//DECLARE NEW VARIABLE

constructor() {
this.contactform = new contactform();
//CREATE NEW DM INSTANCE
    }
}