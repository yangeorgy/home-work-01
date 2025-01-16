import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private usersApiUrl = 'https://jsonplaceholder.typicode.com/users';
  private todoApiUrl = 'https://jsonplaceholder.typicode.com/todos';
  private postsApiUrl = 'https://jsonplaceholder.typicode.com/posts/';
  
  constructor(private http: HttpClient) {}

  usersFetchData(): Promise<any[]> {
    return this.http.get<any[]>(this.usersApiUrl).toPromise(); 
  }

  todosFetchData(): Promise<any[]> {
    return this.http.get<any[]>(this.todoApiUrl).toPromise(); 
  }

  postsFetchData(): Promise<any[]> {
    return this.http.get<any[]>(this.postsApiUrl).toPromise(); 
  }
  
}

