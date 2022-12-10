import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  response = '';

  constructor(private authService: AuthService, private router : Router, private formBuilder: FormBuilder) {}

  async onRegisterClicked(): Promise<void> {
    await this.router.navigate(['/register']);
  }

  async onSubmit(): Promise<void> {
    // Process login data here
    const data = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    await this.authService.login(data).then(async(res) => {
      let body = await res.json();
      this.response = body.message;
      if (body.success && body.token !== undefined) {
        localStorage.setItem('jwt-token', body.token);
        await this.router.navigate(['/home']);
      }
    });
  }
}
