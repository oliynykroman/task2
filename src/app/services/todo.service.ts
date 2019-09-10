import { Injectable } from '@angular/core';
import { todo } from '../models/todo';
import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

const api = environment.apiDomain;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {

  }

  public getTodoList() {
    return this.http.get<todo[]>(`${api}/todos`);
  }

  public getTodoItem(id: number) {
    return this.http.patch<todo>(`${api}/todos/${id}`, status);
  }

  public addTodoItem(todoItem: todo) {
    return this.http.post<todo>(`${api}/todos`, todoItem);
  }

  public updateTodoItem(id: number, status) {
    return this.http.patch<todo>(`${api}/todos/${id}`, status);
  }
  
  public deleteTodoItem(todoItemId: number) {
    return this.http.delete<todo>(`${api}/todos/${todoItemId}`);
  }

}
