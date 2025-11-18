import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

   contactForm!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    Aos.init({ duration: 1000, once: true });

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Easy getter for HTML template
  get f() {
    return this.contactForm.controls;
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const templateParams = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      subject: this.f['subject'].value,
      message: this.f['message'].value
    };

    emailjs
      .send(
        'service_3x7qddb',
        'template_spe2zkg',
        templateParams,
        'sD8rErTnR6i1_99-P'
      )
      .then(() => {
        this.isSubmitting = false;
        alert('Message sent successfully!');
        this.contactForm.reset();
      })
      .catch(() => {
        this.isSubmitting = false;
        alert('Failed to send message. Try again.');
      });
  }
}
