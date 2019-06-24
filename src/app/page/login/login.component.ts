import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  userForm = this.fb.group({
    userId: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  ngOnInit() {}

  onRegisterClick() {
    this.router.navigate(['register']);
    // this.router.navigate(['admin','user','list']); = admin/user/list
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      // call login service
      this.loginService.login(this.userForm.value).subscribe(result => {
        if (result.success) {
          sessionStorage.setItem('APPTOKEN', result.token);
          this.router.navigate(['admin']);
        } else {
          alert('Login Fail !!');
        }
      });
    } else {
      alert('Please fill in user and password');
    }
  }
}
