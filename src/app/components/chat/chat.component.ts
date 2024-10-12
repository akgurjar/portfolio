import { Component } from '@angular/core';
import { ChatService } from '../../chat.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  constructor(public chatService: ChatService) {}
  hideChat() {
    this.chatService.toggle(false);
  }
  sendCommand(input: HTMLTextAreaElement) {
    const command = input.value.trim();
    input.value = '';
    if (command) {
      this.chatService
        .command(command)
        .then((message: string) => {
          console.log(message);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
}
