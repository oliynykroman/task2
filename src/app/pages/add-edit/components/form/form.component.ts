import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { todo } from 'src/app/models/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public todoForm: FormGroup;
  private myDate: number = Date.now();

  @Output() submitData = new EventEmitter<todo>();
  @Input() todoItem:todo = new todo();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    console.log(this.todoItem)
    this.todoForm = this.fb.group({
      "title": this.fb.control(this.todoItem.title, Validators.required),
      "status":  this.fb.control(false),
      "date":  this.fb.control(this.myDate)
    });
  }

  onSubmit() {
    this.submitData.emit(this.todoForm.value);
    this.todoForm.reset();
  }
}
