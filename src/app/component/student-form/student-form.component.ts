import { state } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Pipe } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css',
})
export class StudentFormComponent {
  studentFormData: FormGroup = new FormGroup({
    studentId: new FormControl(0),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl('@gmail.com'),
    city: new FormControl(),
    country: new FormControl(),
    gender: new FormControl(),
    zip: new FormControl(),
    state: new FormControl(),
    terms: new FormControl(false),
  });
  savedData = localStorage.getItem('studentFormData');
  if(savedData) {
    const studentData = JSON.parse(savedData);
    this.studentFormData.patchValue(studentData);
  }
  stdData: any = {};

  Country: string[] = ['India', 'USA', 'Russia', 'Australia'];
  States: string[] = ['MH', 'UP', 'KARNATAKA', 'Gujrat'];
  Cities: string[] = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
  ];
  AddDate() {
    this.stdData = this.studentFormData.value;
    localStorage.setItem('formData', JSON.stringify(this.stdData));
    console.log(this.stdData);
    this.studentFormData.reset();
  }
}
