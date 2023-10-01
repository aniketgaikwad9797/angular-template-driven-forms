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
  userInformation = {
    userName: '',
    emailAddress: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: '',
  };
  submitted = false;

  onSubmitForm() {
    this.submitted = true;
    //console.log('Form Submitted!!', form);
    console.log(this.formElement);
    this.userInformation.userName =
      this.formElement.value.userData.usernameField;
    this.userInformation.emailAddress =
      this.formElement.value.userData.emailField;
    this.userInformation.secretQuestion = this.formElement.value.secretField;
    this.userInformation.questionAnswer = this.formElement.value.qAField;
    this.userInformation.gender = this.formElement.value.genderField;
    console.log(this.userInformation.userName);
  }

  onSuggestUserName() {
    const suggestedName = 'Superuser';
    this.formElement.form.patchValue({
      userData: {
        usernameField: suggestedName,
      },
    });
  }

  onFormReset() {
    this.formElement.reset();
  }
}
