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
  firstName = new FormControl('', [Validators.required,Validators.pattern("^[a-z\u0590-\u05fe]{2,20}")]);
  lastName = new FormControl('', [Validators.required,Validators.pattern("^[a-z\u0590-\u05fe]{2,20}")]);
  // lastName = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.pattern("[0-9 ]{7}"), Validators.required]);

  getFirstNameErrorMessage() {
    if (this.firstName.hasError('pattern')){
      return 'פורמט שם אינו תקין';
    }
    }
  
    getLastNameErrorMessage() {
      if (this.firstName.hasError('pattern')){
        return 'פורמט שם אינו תקין';
      }
      }
    

  // getLastNameErrorMessage() {

  //   if (this.lastName.hasError('required')) {
  //     return 'חובה לרשום שם משפחה';
  //   }
  // }

  // getEmailErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'חובה לרשום כתובת מייל';
  //   }

  //   return this.email.hasError('email') ? 'כתובת המייל שהוזנה אינה תקינה' : '';
  // }

  getTelephoneErrorMessage() {
    if (this.telephone.hasError('pattern') || this.telephone.hasError('minlength')) { // pay attention: lowe case because html 
      return 'נא הזן טלפון תקין בן 7 ספרות';
    }

  }

  
}