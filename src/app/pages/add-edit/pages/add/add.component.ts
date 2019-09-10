import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { todo } from 'src/app/models/todo';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    console.log('init');
  }

  submitData(todoItem: todo) {
    this.todoService.addTodoItem(todoItem).subscribe(
      success => {
        alert('todo created!');
      },
      error => alert(`Oooops something wrong. Please try again later`)
    );
  }

}
