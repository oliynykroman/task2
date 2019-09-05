import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { todo } from 'src/app/models/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public todoList: Observable<Object>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodoList();
  }

}
