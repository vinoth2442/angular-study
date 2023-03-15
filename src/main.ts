import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>

    <button (click)="editText()">Edit Message</button>
    <div *ngIf="editMessage; else noEdit">
      <p> This is now editable </p>
      </div>
      <ng-template #noEdit>
      <p> Read Only </p>
      </ng-template>
    <p [contentEditable]="editMessage">{{message}}</p>
  `,
})
export class App {
  name = 'Angular';
  message = 'This is message';
  editMessage = false;
  editText() {
    this.editMessage = !this.editMessage;
    if (this.editMessage) {
      this.message = 'You can Edit now!';
    } else {
      this.message = 'This is read only message!';
    }
  }
}

bootstrapApplication(App);
