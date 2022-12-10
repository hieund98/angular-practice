import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  response = '';

  constructor(private authService: AuthService, private router : Router, private formBuilder: FormBuilder) {}

  async onSubmit(): Promise<void> {
    // Process login data here
    const data = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }
    await this.authService.register(data).then(async(res) => {
      let body = await res.json();
      this.response = body.message;
    });
  }

  async onLoginClicked(): Promise<void> {
    console.log('onLoginClicked')
    await this.router.navigate(['']);
  }
}
