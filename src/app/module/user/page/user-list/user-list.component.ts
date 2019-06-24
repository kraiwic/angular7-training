import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
  // providers: [UserService]
})
export class UserListComponent implements OnInit {
  // users: User[];
  users: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) {
    // Solution: 1 (normal)
    // this.userService.findAll().subscribe(result => {
    //   this.users = result;
    // });

    // Solution: 2
    this.users = this.userService.findAll();
  }

  ngOnInit() {}

  onDelClick(id: number) {
    this.userService.delete(id).subscribe(result => {
      // to refresh the page
      // Option 1: Call findAll() again
      this.users = this.userService.findAll();

      // Option 2: Use State Management
      // Create State and call state to change it
      // use: ngrx (Reactive State for Angular) or rgxs or redux for angular
    });
  }

  onEditClick(id: number) {
    this.router.navigate(['admin', 'user', 'form', id]);
  }

  onAddClick() {
    this.router.navigate(['admin', 'user', 'form']);
  }
}
