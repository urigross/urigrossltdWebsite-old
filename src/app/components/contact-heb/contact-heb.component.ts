import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm} from '@angular/forms';
import { format } from 'url';


@Component({
  selector: 'app-contact-heb',
  templateUrl: './contact-heb.component.html',
  styleUrls: ['./contact-heb.component.css']
})
export class ContactHebComponent {
  // email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.pattern("^[a-zA-Z\u0590-\u05fe]{2,20}")]);
  lastName = new FormControl('', [Validators.pattern("^[a-zA-Z\u0590-\u05fe]{2,20}")]);
  // lastName = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.pattern("[0-9\+\-]{9,13}")]);
  contactMessage = new FormControl('', [Validators.pattern("^[a-zA-Z0-9\u0590-\u05fe \.,]{2,100}")]);

  getFirstNameErrorMessage() {
    if (this.firstName.hasError('pattern')){
      return 'פורמט שם אינו חוקי';
    }
    }
  
    getLastNameErrorMessage() {
      if (this.lastName.hasError('pattern')){
        return 'פורמט שם אינו חוקי';
      }
      }
    

  getTelephoneErrorMessage() {
    if (this.telephone.hasError('pattern')) { // pay attention: lower case because html 
      return 'נא הזן טלפון תקין';
    }

  }
  getContactMessageErrorMessage(){
    if (this.contactMessage.hasError('pattern')) {
      return ('בשדה ההודעה מותרים אותיות, ספרות, פסיקים ונקודות בלבד')
    }
  }
  
}