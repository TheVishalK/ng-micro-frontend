import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '@ng-micro-frontend/data-access';
import { inject } from '@angular/core';
import { ButtonComponent } from '@ng-micro-frontend/button';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  selector: 'ng-micro-frontend-auth-entry',
  template: `
    <div class="login-app">
      <form class="login-form" (ngSubmit)="login()">
        <label>
          Username:
          <input type="text" name="username" [(ngModel)]="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" [(ngModel)]="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <lib-button>My Shared Button</lib-button>
      <div *ngIf="isLoggedIn$ | async">User is logged in! <button (click)="logout()">Logout</button></div>
    </div>
  `,
  styles: [
    `
      .login-app {
        width: 30vw;
        border: 2px dashed black;
        padding: 8px;
        margin: 0 auto;
      }
      .login-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        padding: 8px;
      }
      label {
        display: block;
      }
    `,
  ],
})
export class RemoteEntryComponent {
  private userService = inject(UserService);
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }

  logout() {
    this.userService.logout();
  }
}