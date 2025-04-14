import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  template: `
    <h1>{{ title }}</h1>
    <button (click)="changeTitle()">Change Title</button>
  `,
  styleUrl: './example.component.scss',
})
export class ExampleComponent {
  title: string = 'Hello World';

  changeTitle() {
    this.title = 'New Title';
  }
}
