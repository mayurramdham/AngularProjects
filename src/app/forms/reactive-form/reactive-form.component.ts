import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  studentForm: FormGroup = new FormGroup({
    FirstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    LastName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    Email: new FormControl('', [Validators.email]),
    City: new FormControl(),
    State: new FormControl(),
    zipCode: new FormControl(),
    isAcceptTerms: new FormControl(),
  });

  formValue: any;
  onSubmit() {
    this.formValue = this.studentForm.value;
    console.log(this.formValue);
  }
  onReset() {
    this.studentForm.reset();
  }
}
