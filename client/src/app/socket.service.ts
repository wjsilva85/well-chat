import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  listen(eventName: string): Observable<any> {
    //console.log('this is socket', this.socket);
    this.socket.off(eventName);
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        console.log('io data', data);
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }
}
