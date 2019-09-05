import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { todo } from 'src/app/models/todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  todoForm: FormGroup;
  myDate: number = Date.now();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.todoForm = new FormGroup({
      "title": new FormControl('', Validators.required),
      "status": new FormControl(false),
      "date": new FormControl(this.myDate)
    })
  }

  add(todoItem) {
    this.todoService.addTodoItem(todoItem).subscribe(
      success => this.succesfullResponse(),
      error => alert(`Oooops something wrong: ${error}. Please try again later`)
    );
  }

  succesfullResponse() {
    alert('todo created!');
    this.todoForm.controls['title'].setValue('');
  }
  onSubmit() {
    this.add(this.todoForm.value);
    console.log(this.todoForm);
  }


}
