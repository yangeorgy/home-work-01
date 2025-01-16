import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataMngService } from 'src/app/data-mng.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input() todo: any;
  @Output() markedCompleted: EventEmitter<void> = new EventEmitter();

  constructor(private DataMngService: DataMngService) { }

  ngOnInit(): void {
  }


  markCompleted(todoId: string, userId: string){
    this.DataMngService.markTodoAsCompleted(todoId, userId);
    this.todo.completed = true;
    this.markedCompleted.emit();
  }

}
