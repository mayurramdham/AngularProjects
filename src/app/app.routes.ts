import { Routes } from '@angular/router';
import { StructuralDirectiveComponent } from './directive/structural-directive/structural-directive.component';
import { AddEmpComponent } from './component/add-emp/add-emp.component';
import { EmpListComponent } from './component/emp-list/emp-list.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './http-client/get-api/get-api.component';
import { PostApiComponent } from './http-client/post-api/post-api.component';
import { AllApiComponent } from './http-client/all-api/all-api.component';

export const routes: Routes = [
  // {
  //     path:'immediate', component:StructuralDirectiveComponent
  // },
  // {
  //     path: 'lazy',
  //     loadChildren: () => import('./testing/testing.module').then(m => m.TestingModule),
  //   },
  //   { path: '', redirectTo: '/immediate', pathMatch: 'full' }, // Your default route

  {
    path: 'add-emp',
    component: AddEmpComponent,
  },
  {
    path: 'emp-list',
    component: EmpListComponent,
  },
  {
    path: 'struc-directive',
    component: StructuralDirectiveComponent,
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'template-forms',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-forms',
    component: ReactiveFormComponent,
  },
  {
    path: 'post-api',
    component: PostApiComponent,
  },
  {
    path: 'get-api',
    component: GetApiComponent,
  },
  {
    path: 'all-api',
    component: AllApiComponent,
  },
];
