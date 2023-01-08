import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  name: string;
  email: string;
  subject: string;
  message: string;
  constructor() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  submitForm(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.resetForm(form);
    }
  }

}
