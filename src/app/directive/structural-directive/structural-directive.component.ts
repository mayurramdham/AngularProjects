import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

isDiv1Visible:boolean=true;
isDiv2Visible:boolean=true;
num1:string="";
num2:string="";
ischecked:boolean=true;
selectedValue:string="";

cityArray:string[]=
[
  'Nagpur',
  'Mumbai',
  'Pune',
  'Amravati'
]
studentNames:any[]=[
  {
    stdId:1, Name:'Mayur', City:'Nagpur', isActive:true},
    {stdId:2, Name:'chirag', City:'banglore', isActive:true},
    {stdId:3, Name:'harsh', City:'bhandara', isActive:false},
     { stdId:4, Name:'ajay', City:'bhopal', isActive:false},
    {
      stdId:5, Name:'atul', City:'Pune', isActive:true
  }
]

showDiv1(){
  this.isDiv1Visible=true;
}
hideDiv1(){
  this.isDiv1Visible=false;
}
toggleDiv2(){
  this.isDiv2Visible=!this.isDiv2Visible;
}
constructor(){
    console.warn(`[${new Date().toISOString()}] Immediate component loaded!`);
}
}
