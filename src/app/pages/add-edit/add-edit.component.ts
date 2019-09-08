import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { todo } from 'src/app/models/todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  private todoForm: FormGroup;
  private myDate: number = Date.now();
  public isEdit: boolean = false;
  private todoItem: todo[] = [];

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.initEditData();
  }

  initForm() {

    this.todoForm = new FormGroup({
      "title": new FormControl('', Validators.required),
      "status": new FormControl(false),
      "date": new FormControl(this.myDate)
    })
  }

  initEditData() {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.isEdit = true;
        this.todoService.getTodoList().subscribe(data => {
          this.todoItem = data.filter(({ id }) => id === +params.get('id'));
          this.todoForm.controls['title'].setValue(this.todoItem[0].title);
        });
      }
    });
  }

  add(todoItem: todo) {
    this.todoService.addTodoItem(todoItem).subscribe(
      success => {
        alert('todo created!');
        this.todoForm.controls['title'].setValue('');
        this.isEdit = false;
      },
      error => alert(`Oooops something wrong. Please try again later`)
    );
  }

  onSubmit() {
    this.add(this.todoForm.value);
  }


}
