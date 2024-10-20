import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName:string="Typescript";
  stateName:string="Maharashtra";
  inputType="radio";
  rollNo:number=12;
  isIndian:boolean=true;
  currendate:Date=new Date();
  inputTypes="text";
  myClassName:string="bg-primary";
  

  constructor(){

  }
  showWelcome(message:string){
      alert(message)
  }
  showCourseName(){
    this.courseName="ReactJs";
    alert(this.courseName="ReactJs");
  }
}
