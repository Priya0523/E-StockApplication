import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    username: [null,Validators.compose([Validators.required,Validators.minLength(6)])],
    email: [null,Validators.required],
    password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
  });
  
  constructor(private readonly router: Router,
    private readonly fb:FormBuilder,) { }
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/dashboard']);
  }

  registerCompany(){
    this.router.navigate(['/register-company']);
  }
}
