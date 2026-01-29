import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

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
        'service_zie3fbt',
        'template_lcatdui',
        {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        },
        'ou1MCTn0J4JtBwg-G',
      )
      .then(() => {
        this.form = { name: '', email: '', subject: '', message: '' };
        this.success = true;
      })
      .catch((error) => {
        console.error('Email error:', error);
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
