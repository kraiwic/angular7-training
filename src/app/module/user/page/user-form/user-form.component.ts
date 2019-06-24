import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  id: number;
  EDITMODE = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.EDITMODE = true;
        this.id = params.id;
        this.userService.getUserById(params.id).subscribe(user => {
          // this.userForm.setValue(user);
          this.userForm.patchValue(user);
        });
      }
    });
  }

  userForm = this.fb.group({
    userId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  ngOnInit() {}

  onFormSubmit() {
    if (this.userForm.valid) {
      if (this.EDITMODE) {
        // Edit Mode
        this.userService.updateUser(this.id, this.userForm.value).subscribe(
          result => {
            this.router.navigate(['admin', 'user', 'list']);
          },
          err => {
            alert(err);
          }
        );
      } else {
        // Save Mode
        this.registerService.regis(this.userForm.value).subscribe(result => {
          this.router.navigate(['admin', 'user', 'list']);
        });
      }
    }
  }
}
