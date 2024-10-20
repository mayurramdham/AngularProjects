import { Component, isStandalone } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmpComponent } from './component/add-emp/add-emp.component';
import { EmpListComponent } from './component/emp-list/emp-list.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    AddEmpComponent,
    EmpListComponent,
    DataBindingComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    BrowserAnimationsModule, // Required for animations
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learnangular';
  constructor(private toaster: ToastrService) {}
}
