import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { todo } from 'src/app/models/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private todoForm: FormGroup;
  private myDate: number = Date.now();

  @Output() submitData = new EventEmitter<todo>();

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.todoForm = new FormGroup({
      "title": new FormControl('', Validators.required),
      "status": new FormControl(false),
      "date": new FormControl(this.myDate)
    });
  }

  onSubmit() {
    this.submitData.emit(this.todoForm.value);
    this.todoForm.controls['title'].setValue('');
  }
}
