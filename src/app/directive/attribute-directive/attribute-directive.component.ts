import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,RouterOutlet],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1bgcolor:string="";
  isbgSuccess:boolean=false;
  isChecked:boolean=false;
  num1:string=""
  num2:string=""

  studentNames:any[]=[
    {stdId:1, Marks:85, Gender:'Male',  Name:'Mayur', City:'Nagpur', isActive:true},
    {stdId:2, Marks:15,  Gender:'Female', Name:'chirag', City:'banglore', isActive:true},
    {stdId:3, Marks:63,  Gender:'Male', Name:'harsh', City:'bhandara', isActive:false},
    {stdId:4, Marks:89,  Gender:'Female', Name:'ajay', City:'bhopal', isActive:false},
    {stdId:5, Marks:55,  Gender:'Male', Name:'atul', City:'Pune', isActive:true}
  ]
  
  constructor(private router :Router){

  }

  bgPrimarycolor(){
    this.div1bgcolor="bg-primary";
  }
  bgDangerColor(){
    this.div1bgcolor="bg-danger";
  }
  bgSuccessToggle(){
    this.isbgSuccess=!this.isbgSuccess
  }
  bgCheckedbox(){
    this.isChecked=!this.isChecked
  }
  navigateAttributetoStructural(){
    this.router.navigate(['/struc-directive'])
  }
}
