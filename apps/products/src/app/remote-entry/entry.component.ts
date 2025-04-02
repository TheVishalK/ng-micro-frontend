import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ng-micro-frontend-products-entry',
  template: `<ng-micro-frontend-nx-welcome></ng-micro-frontend-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor(){
    console.log("In Product Remote");
  }
}
