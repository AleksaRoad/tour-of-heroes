import { Component } from '@angular/core';
import { MessageService } from '../../core/services/message/message.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MessagesComponent {
  private messages: BehaviorSubject<string[]>;

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.messages;
  }

  getMessages(): string[] {
    return this.messages.getValue();
  }

  clearMessages() {
    this.messageService.clear();
  }
}
