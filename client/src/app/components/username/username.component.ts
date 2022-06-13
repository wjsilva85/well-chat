import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  constructor(private socketService: SocketService) {}

  @Output() userNameEvent = new EventEmitter<string>();

  userName: string = '';
  ngOnInit(): void {}

  setUserName(): void {
    this.userNameEvent.emit(this.userName);
  }
}
