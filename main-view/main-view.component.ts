import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataMngService } from '../data-mng.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  
  users: any[] = [];
  searchParam: string = '';
  showNewUser: boolean = false;


  constructor(private apiService: ApiService, private DataMngService: DataMngService) {}

  ngOnInit(): void {

    // 1. Fetch api data
    // 2. Set the fetched data in the service
    // 3. Update local user data

    this.apiService.usersFetchData().then((users) => {
      this.DataMngService.usersSetData(users); 
      this.users =  this.DataMngService.getAllUsers();
    }).catch((error) => {
      console.error('Error fetching users:', error);
    });


    this.apiService.todosFetchData().then((todos) => {
      this.DataMngService.todosSetData(todos); 
    }).catch((error) => {
      console.error('Error fetching todos:', error);
    });


    this.apiService.postsFetchData().then((posts) => {
      this.DataMngService.postsSetData(posts); 
    }).catch((error) => {
      console.error('Error fetching posts:', error);
    });

  }

  get filteredUsers() {
    return this.users.filter(person => person.name.toLowerCase().includes(this.searchParam.toLowerCase())        //person.name.toLowerCase().includes(this.searchParam.toLowerCase())
         //||  person.mail.toLowerCase().includes(this.searchParam.toLowerCase())
    );
  }

  toggleUserView(){ //toggle user/new user 
    this.showNewUser = !this.showNewUser;
  }

  addNewUser(){
    //call srvc
    this.toggleUserView();
  }

  reRndrView(){
    this.users =  this.DataMngService.getAllUsers();
  }

}
