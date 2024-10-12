import { Component, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ChatService } from './chat.service';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isChatOpened = false;
  constructor(
    matIconReg: MatIconRegistry,
    sanitizer: DomSanitizer,
    public chatService: ChatService
  ) {
    matIconReg.setDefaultFontSetClass('material-symbols-outlined');
    // matIconReg.addSvgIcon(
    //   'ag',
    //   sanitizer.bypassSecurityTrustResourceUrl('icon.svg')
    // );
    matIconReg.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('social/github.svg')
    );
    matIconReg.addSvgIcon(
      'linkedin',
      sanitizer.bypassSecurityTrustResourceUrl('social/linkedin.svg')
    );
    matIconReg.addSvgIcon(
      'youtube',
      sanitizer.bypassSecurityTrustResourceUrl('social/youtube.svg')
    );
    matIconReg.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('social/twitter.svg')
    );
    matIconReg.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('social/instagram.svg')
    );
    effect(() => {
      this.isChatOpened = chatService.isShown();
    });
  }
}
