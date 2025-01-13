import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private readonly authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }
}
