import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataMngService } from 'src/app/data-mng.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private DataMngService: DataMngService) { }

  @Input() userId: string;
  @Output() postCancelled: EventEmitter<void> = new EventEmitter();
  @Output() postSaved: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  addPost(userId: string, title: string, body: string){
    this.DataMngService.addPost(userId, title, body);
    this.postSaved.emit(userId);
  }

  cancelPost(){
   this.postCancelled.emit();
  }

}
