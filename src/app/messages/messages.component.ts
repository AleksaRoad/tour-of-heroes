import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';
import { BehaviorSubject } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
    standalone: true,
    imports: [NgFor],
})
export class MessagesComponent {
  private messages: BehaviorSubject<string[]>;

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.messages;
  }

  getMessages(): string[] {
    return this.messages.value;
  }

  clearMessages() {
    this.messages.next([]);
  }
}
