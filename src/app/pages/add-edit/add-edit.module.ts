import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditRoutingModule } from './add-edit-routing.module';
import { AddEditComponent } from './add-edit.component';


@NgModule({
  declarations: [AddEditComponent],
  imports: [
    CommonModule,
    AddEditRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddEditModule { }
