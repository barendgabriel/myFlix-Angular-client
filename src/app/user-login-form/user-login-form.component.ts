import { FetchApiDataService } from '../fetch-api-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * Component displaying the login form
 * @selector 'app-login-form'
 * @templateUrl './login-form.component.html'
 * @styleUrls ['./login-form.component.scss']
 */
@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.scss',
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = { username: '', password: '' };

  /**
   * Called when creating an instance of the class
   * @constructor
   * @param userRegistrationService - connects the client to the API
   * @param dialogRef - references this component when opening the dialog
   * @param snackBar - provides feedback after user interaction by displaying notifications
   * @param router - the Router module for navigation
   */
  constructor(
    public FetchApiDataService: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUser(): void {
    this.FetchApiDataService.userLogin(this.userData).subscribe(
      (response) => {
        // Logic for a successful user login
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        this.dialogRef.close(); // This will close the modal on success!
        console.log(response);
        this.snackBar.open('user logged in successfully', 'OKay', {
          duration: 2000,
        });
        this.router.navigate(['movies']);
      },
      (result) => {
        this.snackBar.open('login failed', 'OKay', {
          duration: 2000,
        });
      }
    );
  }
}
