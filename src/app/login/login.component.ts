import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  showError = false;
  users: any = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    const user = this.loginForm.value;

    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      var isValid = false;

      for (let u of this.users) {
        if (u.userName == user.userName && u.password == user.password) {
          isValid = true;
          this.userService.setUser(u);
        }
      }

      if (isValid) {
        this.router.navigateByUrl('/weldpoint-list');
      } else {
        this.showError = true;
        this.loginForm.reset()
      }
    });
  }

  register() {
    this.router.navigate(['/registration']);
  }
}
