import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  messageFormControl = new FormControl('', [Validators.required]);

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    this.disableFields();

    //Animation anzeigen

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    fd.append('email', mailField.value);

    //senden
    await fetch(
      'https://georgios-koinaris.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    //Text anzeigen: Nachricht gesendet

    this.enableFields();
    this.clearInputs();
  }

  disableFields() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    mailField.disable = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }

  enableFields() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    nameField.disabled = false;
    mailField.disable = true;
    messageField.disabled = false;
  }

  clearInputs() {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    nameField.value = '';
    mailField.value = '';
    messageField.value = '';
  }
}
