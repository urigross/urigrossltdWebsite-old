import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-heb',
  templateUrl: './contact-heb.component.html',
  styleUrls: ['./contact-heb.component.css']
})
export class ContactHebComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  telephone = new FormControl('', [Validators.pattern("[0-9 ]{7}"), Validators.required]);

  getFirstNameErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'חובה לרשום שם פרטי';
    }
  }

  getLastNameErrorMessage() {
    if (this.lastName.hasError('required')) {
      return 'חובה לרשום שם משפחה';
    }
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'חובה לרשום כתובת מייל';
    }

    return this.email.hasError('email') ? 'כתובת המייל שהוזנה אינה תקינה' : '';
  }

  getTelephoneErrorMessage() {
    if (this.telephone.hasError('pattern') || this.telephone.hasError('minlength')) { // pay attention: lowe case because html 
      return 'נא הזן טלפון תקין בן 7 ספרות';
    }

    return this.telephone.hasError('required') ? 'לא הוזן מספר טלפון' : '';
  }
}