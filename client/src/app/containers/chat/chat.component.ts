import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  userList$: Observable<string[]>;
  ngOnInit(): void {
    this.onUserList();
    this.onMessageBroadcast();
  }

  userNameUpdate(userName: string): void {
    this.userName = userName;
    this.socketService.emit('set-user-name', userName);
  }

  onUserList() {
    this.userList$ = this.socketService.listen('user-list');
  }

  onMessageBroadcast() {
    this.socketService
      .listen('message-broadcast')
      .subscribe(
        (data: { message: string; userName: string; isMine: boolean }) => {
          this.messageList.push(data);
        }
      );
  }

  onSendMessage() {
    this.socketService.emit('message', {
      message: this.message,
      userName: this.userName,
    });
    this.messageList.push({
      message: this.message,
      userName: this.userName,
      isMine: true,
    });
    this.message = '';
  }
}
