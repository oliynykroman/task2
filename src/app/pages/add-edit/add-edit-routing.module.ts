import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit.component';


const routes: Routes = [
  {
    path: '',
    component: AddEditComponent
  },
  {
    path: ':id',
    component: AddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEditRoutingModule { }
