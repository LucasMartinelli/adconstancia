import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;
  showAlert: boolean = false;

  constructor(private contactService: ContactService) {
    this.contactForm = this.createForm();
  }

  ngOnInit() {}

  createForm() {
    return new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefone: new FormControl(''),
      assunto: new FormControl(''),
      mensagem: new FormControl('', [Validators.required]),
    });
  }

  sendContact() {
    this.contactService
      .sendContact(this.contactForm.value)
      .subscribe((resp) => {
        if (resp) {
          this.contactForm.reset();
          this.showAlert = true;
        }
      });
  }
}
