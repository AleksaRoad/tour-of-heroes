import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  add(message: string) {
    const currentMessages = this.messages.getValue();
    currentMessages.push(message);
    this.messages.next(currentMessages);
  }

  clear() {
    this.messages.next([]);
  }

  constructor() {}
}
