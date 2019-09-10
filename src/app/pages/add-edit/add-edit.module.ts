import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditRoutingModule } from './add-edit-routing.module';
import { AddEditComponent } from './add-edit.component';
import { FormComponent } from './components/form/form.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';


@NgModule({
  declarations: [AddEditComponent, AddComponent, EditComponent, FormComponent],
  imports: [
    CommonModule,
    AddEditRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddEditModule { }
