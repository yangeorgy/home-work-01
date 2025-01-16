import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';
import { DataMngService } from 'src/app/data-mng.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  @Input() userId: string;

  @Output() todoCancelled: EventEmitter<void> = new EventEmitter();
  @Output() todoSaved: EventEmitter<string> = new EventEmitter();

  constructor(private DataMngService: DataMngService) { }

  ngOnInit(): void {
  }

  AddTodo(todoBody: string, userId: string){  
    this.DataMngService.addTodo(todoBody, userId);
    this.todoSaved.emit(userId);
  }

  CancelAddTodo() {
    this.todoCancelled.emit();
  }

}
