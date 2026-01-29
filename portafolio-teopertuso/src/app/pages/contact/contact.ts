import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
})
export class Contact {
  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  loading = false;
  success = false;
  error = false;

  sendEmail() {
    this.loading = true;
    this.success = false;
    this.error = false;
    emailjs
      .send(
        environment.emailJsServiceId,
        environment.emailJsTemplateId,
        {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        },
        environment.emailJsPublicKey,
      )
      .then(() => {
        this.form = { name: '', email: '', subject: '', message: '' };
        this.success = true;
      })
      .catch((error: unknown) => {
        console.error('Email error:', error);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
