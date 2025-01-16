import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataMngService } from 'src/app/data-mng.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  todos: any[] = [];
  posts: any[] = [];
  
  @Input() user: any;
  @Output() delUserClicked = new EventEmitter<void>();
  

  addTodoVisibility: boolean = false;
  showCurrTodos: boolean = true;
  postVisibility: boolean = false;

  borderColorCompletedTodos:boolean = false;

  isOrange: boolean = false;

  userNameInput: string = "";

  constructor(private DataMngService: DataMngService) { }

  ngOnInit(): void {
    
  }

  showDetails: boolean = false;
  showPostTodo: boolean = false;
  
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  togglePostTodo(userId: string){
    this.showPostTodo = !this.showPostTodo;
    this.isOrange = !this.isOrange;

    if(this.showPostTodo){
      this.todos = this.DataMngService.getTodosByUserId(userId);   
      this.posts = this.DataMngService.getPostsByUserId(userId);
    }
  }

  toggleTodo(){ //toggle todo and add new todo
    this.addTodoVisibility = !this.addTodoVisibility;
    this.showCurrTodos = !this.showCurrTodos;
  }

  AddTodo(){
    this.toggleTodo();
  }

  onChildTodoSaved(userId: string) {
    this.todos = this.DataMngService.getTodosByUserId(userId);  
    this.toggleTodo();
  }

  onChildTodoCancelled(){
    this.toggleTodo();
  }

  updateUser(userId: string, name: string, email: string, street: string, city: string, zipCode: string){
    this.DataMngService.updateUserData(userId, name, email, street, city, zipCode);
  }

  deleteUser(userId: string){
    this.DataMngService.deleteUser(userId);
    this.delUserClicked.emit();
  }

  onChildPostSaved(userId: string){
    this.posts = this.DataMngService.getPostsByUserId(userId);
    this.togglePostsVisibility();
  }

  onChildPostCancelled(){
    this.togglePostsVisibility();
  }

  togglePostsVisibility(){
    this.postVisibility = !this.postVisibility;
  }
  
  postMarkedCompleted(){
    this.borderColorCompletedTodos = this.DataMngService.getBorderColorCompletedTodos();
  }

  
}
