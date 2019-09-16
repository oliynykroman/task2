import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { todo } from 'src/app/models/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public todoList: todo[] = [];

  private subscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.subscription = this.todoService.getTodoList().subscribe(data => this.todoList = data);
  }

  deleteItem(item: todo, index: number) {
    let confirmStatus = confirm(`are you shure that you want to delete ${item.title}`);
    if (confirmStatus) {
      this.subscription = this.todoService.deleteTodoItem(item.id).subscribe(
        // success => this.todoList.splice(index, 1),
        success => this.getTodoList(),
        error => alert(`Oooops something wrong: ${error}. Please try again later`)
      );
    }
  }

  changeStatus(item: todo) {
    this.subscription = this.todoService.updateTodoItem(item.id, { 'status': item.status = !item.status }).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
