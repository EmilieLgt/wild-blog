import { Component } from '@angular/core';
import { Contact } from '../models/Contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  newContact: Contact = {
    lastname: '',
    firstname: '',
    email: '',
  };

  onSubmit(): void {
    console.log(this.newContact);
  }
}
