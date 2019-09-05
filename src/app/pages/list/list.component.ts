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

  getTodoList(){
    this.todoService.getTodoList().subscribe(data => this.todoList = data);
  }

  deleteItem(item: todo, index: number) {
    let confirmStatus = confirm(`are you shure that you want to delete ${item.title}`);
    if (confirmStatus) {
      this.todoService.deleteTodoItem(item.id).subscribe(
        success => { alert(success); this.todoList = this.todoList.splice(index, 1); },
        error => alert(`Oooops something wrong: ${error}. Please try again later`)
      );
    }

  }
}
