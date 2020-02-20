import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.scss']
})
export class ValidationFormComponent implements OnInit {
  validationForm: FormGroup;
  output = '';
  isNotNumber: boolean;

  constructor(private fb: FormBuilder) {
    this.validationForm = this.fb.group({ input: '', output: '' });
  }

  ngOnInit(): void {}

  onKeyUp(event: any) {
    const input = event.target.value;
    this.isNotNumber = false;
    this.output = "";
    
    if (isNaN(input) ) {
      this.isNotNumber = true;
      this.output = '';
    } else {
      if (input > 0) {
        if (input % 3 === 0 && input % 5 === 0) {
          this.output = 'FooBar';
        } else if (input % 5 === 0) {
          this.output = 'Bar';
        } else if (input % 3 === 0) {
          this.output = 'Foo';
        } else {
          this.output = '';
        }
      }
    }
  }
}
