import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataMngService {

  private users: any[] = []; 
  private todos: any[] = []; 
  private posts: any[] = []; 

  private borderColorCompletedTodos = false;

  constructor() { }

  usersSetData(fetchedData: any[]): void {this.users = fetchedData}
  todosSetData(fetchedData: any[]): void {this.todos = fetchedData}
  postsSetData(fetchedData: any[]): void {this.posts = fetchedData}
  getAllUsers(){return this.users}

  getTodosByUserId(userId: string){return this.todos.filter(todo => todo.userId == userId)}
  getPostsByUserId(userId: string){return this.posts.filter(post => post.userId == userId)}



  /********* manage todo data *********/
  addTodo(todoBody: string, userId: string){
    let lastId = Math.max(...this.todos.filter(item => item.userId === userId).map(item => item.id)); //calculate latest todo id for current userId
    let newId = lastId + 1;
    let newTodo = {"userId": userId, "id": newId, "title": todoBody, "completed": false};
    this.todos.push(newTodo);
  }

  markTodoAsCompleted(todoId: string, userId: string){ //checks unmarked todos per userId, and set border color
    const todoToUpdate = this.todos.find(todo => todo.id == todoId);
    if (todoToUpdate) {
      todoToUpdate.completed = true;  
    }

    let filteredByUserId = this.todos.filter(todo => todo.userId === userId);
    this.borderColorCompletedTodos = filteredByUserId.every(todo => todo['completed'] === true)
  }


  getBorderColorCompletedTodos(){ //get border color, depends on if uncompleted todos left (for more info check markTodoAsCompleted())
    return this.borderColorCompletedTodos;
  }



  /********* manage users data *********/
  addNewUser(name: string, email: string){
    let newId = this.users.length;
    let newUser = {
                      "id": newId,
                      "name": name,
                      "username": "",
                      "email": email,
                      "address": {
                          "street": "",
                          "suite": "",
                          "city": "",
                          "zipcode": "",
                          "geo": {
                              "lat": "",
                              "lng": ""
                          }
                      },
                      "phone": "",
                      "website": "",
                      "company": {
                          "name": "",
                          "catchPhrase": "",
                          "bs": ""
                      }
                  };

    this.users.push(newUser);
    //console.log(this.users);
  }

  updateUserData(userId: string, name: string, email: string, street: string, city: string, zipCode: string){

    let userDataToUpdate = {
        "id": userId,
        "name": name,
        "username": "",
        "email": email,
        "address": {
            "street": street,
            "suite": "",
            "city": city,
            "zipcode": zipCode,
            "geo": {
                "lat": "",
                "lng": ""
            }
        },
        "phone": "",
        "website": "",
        "company": {
            "name": "",
            "catchPhrase": "",
            "bs": ""
        }
    };

    let updatedUsers = this.users.map(user => 
        user.id == userId ? userDataToUpdate : user
    );

    this.users = updatedUsers;
    //console.log(this.users);
  }

  deleteUser(userId: string){
    this.users =  this.users.filter(user => user.id !== userId);
    //console.log(this.users);
  }


  /********* manage post data *********/
  addPost(userId: string, title: string, body: string){
    let lastId = Math.max(...this.posts.filter(item => item.userId === userId).map(item => item.id)); //calculate latest post id for current userId
    let newId = lastId + 1;
    let newPost = {"userId": userId, "id": newId, "title": title, "body": body};
    this.posts.push(newPost);

    //console.log(this.posts);
  
  }

}
