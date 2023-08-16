import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {

  formData: FormGroup;

  constructor(private builder: FormBuilder) {  }

  ngOnInit() {
    this.formData = this.builder.group({
      to_name: 'Valentino',
      from_name: new FormControl('', [Validators.required]),
      from_email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }
  
  async submitForm() {
    emailjs.init('xMdovJpObFMqzgnf9');
    let response = await emailjs.send("service_s83gyer","template_io2voko", {
      to_name: this.formData.value.to_name,
      from_name: this.formData.value.from_name,
      from_email: this.formData.value.from_email,
      message: this.formData.value.message,
    });

    alert('Message sent!');
    this.formData.reset;
  }
}
