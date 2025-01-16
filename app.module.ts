import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { UserComponent } from './main-view/user/user.component';
import { TodoComponent } from './main-view/user/todo/todo.component';
import { PostComponent } from './main-view/user/post/post.component';
import { NewTodoComponent } from './main-view/user/new-todo/new-todo.component';
import { NewPostComponent } from './main-view/user/new-post/new-post.component';
import { NewUserComponent } from './main-view/new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    UserComponent,
    TodoComponent,
    PostComponent,
    NewTodoComponent,
    NewPostComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
