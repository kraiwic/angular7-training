import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-zone',
  templateUrl: './public-zone.component.html',
  styleUrls: ['./public-zone.component.css']
})
export class PublicZoneComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToTest() {
    this.router.navigate(['admin', 'user', 'list']);
  }
}
