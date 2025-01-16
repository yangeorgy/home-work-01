import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { DataMngService } from 'src/app/data-mng.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Output() addUserCanceled = new EventEmitter<void>();
  @Input() user: any;

  constructor(private DataMngService: DataMngService) { }

  ngOnInit(): void {
  }

  cancelAddUser(){
    this.addUserCanceled.emit();
  }

  addNewUser(newUserName: string, newUserEmail: string){
    this.DataMngService.addNewUser(newUserName, newUserEmail);
  }

}
