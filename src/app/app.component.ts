import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') formElement: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  onSubmitForm() {
    //console.log('Form Submitted!!', form);
    console.log(this.formElement);
  }

  onSuggestUserName() {
    const suggestedName = 'Superuser';
    this.formElement.form.patchValue({
      userData: {
        usernameField: suggestedName,
      },
    });
  }
}
