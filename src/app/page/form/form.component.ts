import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onFormSubmit(simpleForm: NgForm) {
    if (simpleForm.valid) {
      alert('Valid Form');
    } else {
      alert('Invalid Form');
    }
  }
}
