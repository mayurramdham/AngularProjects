import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [RouterLink,RouterModule,FormsModule,JsonPipe,CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
StudentObj:any={
  FirstName:'',
  LastName:'',
  UserName:'',
  City:'',
  State:'',
  ZipCode:'',
  isAcceptTerms:false,
  
}
formValue:any;
onsubmitData(){
  debugger;
  this.formValue=this.StudentObj
}
resetForm(){
  this.StudentObj={
  FirstName:'',
  LastName:'',
  UserName:'',
  City:'',
  State:'',
  ZipCode:'',
  isAcceptTerms:false,
  }
}
}
