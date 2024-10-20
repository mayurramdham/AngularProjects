import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    ToastrModule,
    BrowserAnimationsModule,
  ],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  studentForm: FormGroup = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    DateOfBirth: new FormControl(''),
  });
  formValue: [] = [];
  http = inject(HttpClient);

  constructor(private toastr: ToastrService) {}
  onSubmit() {
    this.formValue = this.studentForm.value;
    console.log(this.formValue);
    this.http
      .post('https://localhost:7266/api/Student/CreateStudent', this.formValue)
      .subscribe(
        (res: any) => {
          this.toastr.success('Student created successfylly');
        },
        (error) => {
          console.log('Error occured', error);
        }
      );
  }

  onReset() {
    ({
      Name: new FormControl(''),
      Email: new FormControl(''),
      DateOfBirth: new FormControl(''),
    });
  }
}
