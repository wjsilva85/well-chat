import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css'],
})
export class UsernameComponent implements OnInit {
  constructor() {}

  @Output() userNameEvent = new EventEmitter<string>();

  userName: string = '';
  ngOnInit(): void {}

  setUserName(): void {
    this.userNameEvent.emit(this.userName);
  }
}
