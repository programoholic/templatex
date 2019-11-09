import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: SocketIOClient.Socket;
  constructor() { 
    this.socket = io('http://localhost:3000');
  }
  //EMITTER
  connectUser() {
    this.socket.emit('connected', {});
  }

  // HANDLER
  onNewUserConnected() {
    console.log('event is fired',);
    return Observable.create(observer => {
      this.socket.on('userConnected', count => {
        observer.next(count);
      });
    });
  }
}
