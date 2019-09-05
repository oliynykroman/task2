import { Injectable } from '@angular/core';
import { todo } from '../models/todo';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

const api = environment.apiDomain;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {

  }

  public getTodoList()  {
    return this.http.get<todo>(`${api}/todos`);
  }

}
