import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fbind } from 'q';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  simpleForm = this.fb.group({
    first: [
      '',
      [Validators.required, Validators.minLength(5), Validators.email]
    ],
    last: ['', [Validators.required]]
  });
  ngOnInit() {}

  onFormGroupSubmit() {
    if (this.simpleForm.valid) {
      alert('Valid Form Group');
    } else {
      alert('Invalid Form Group');
    }
  }
}
