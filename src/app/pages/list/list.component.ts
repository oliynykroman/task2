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

  public todoList: todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodoList().subscribe(data => this.todoList = data);
  }

  deleteItem(item: todo, index: number) {
    console.log(index);
    let confirmStatus = confirm(`are you shure that you want to delete ${item.title}`);
    if (confirmStatus) {
      this.todoService.deleteTodoItem(item.id).subscribe(
        // success => this.todoList.splice(index, 1),
        success => this.getTodoList(),
        error => alert(`Oooops something wrong: ${error}. Please try again later`)
      );
    }
  }
}
