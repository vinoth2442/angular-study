import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CountService } from './count.service';

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


    /* Service Test */
<br>
    <button (click)="printCount()">Print Count</button>
    <p> Count printed in console</p>
  `,
})
export class App {
  name = 'Angular';
  message = 'This is message';
  editMessage = false;
  count = 0;
  constructor(private countserv: CountService) {}
  editText() {
    this.editMessage = !this.editMessage;
    if (this.editMessage) {
      this.message = 'You can Edit now!';
    } else {
      this.message = 'This is read only message!';
    }
  }
  printCount() {
    this.countserv.writeCount(this.count);
    this.count++;
  }
}

bootstrapApplication(App);
