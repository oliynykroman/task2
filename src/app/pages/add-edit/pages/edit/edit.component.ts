import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { todo } from 'src/app/models/todo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  private id: number;
  public todoItem: todo;

  private subscription: Subscription;

  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.todoService.getTodoItem(this.id).subscribe(data => this.todoItem = data);
  }

  submitData(todoObject: todo) {
    this.subscription = this.todoService.updateTodoItem(this.id, { 'title': todoObject.title }).subscribe(
      success => {
        alert(`Item edited :)`);
        this.router.navigate(['/']);
      },
      error => alert(`Oooops something wrong. Please try again later`)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
