import { Injectable } from '@angular/core';

import openSocket from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor() {
    this.socket = openSocket(this.url);
  }

  socket: any;
  private readonly url: string = `${environment.baseUrl}`;
}
