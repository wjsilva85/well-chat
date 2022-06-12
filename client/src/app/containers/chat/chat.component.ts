import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  constructor(private socketService: SocketService) {}
  userName: string = '';
  message: string = '';
  messageList: { message: string; userName: string; isMine: boolean }[] = [];
  userList: string[] = [];
  ngOnInit(): void {}

  userNameUpdate(userName: string): void {
    this.userName = userName;
  }
}
