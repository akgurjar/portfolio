import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(matIconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    matIconReg.setDefaultFontSetClass('material-symbols-outlined');
    // matIconReg.addSvgIcon(
    //   'ag',
    //   sanitizer.bypassSecurityTrustResourceUrl('icon.svg')
    // );
    // matIconReg.addSvgIcon(
    //   'youtube',
    //   sanitizer.bypassSecurityTrustResourceUrl('social/youtube.svg')
    // );
    matIconReg.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('social/facebook.svg')
    );
    matIconReg.addSvgIcon(
      'twitter',
      sanitizer.bypassSecurityTrustResourceUrl('social/twitter.svg')
    );
    matIconReg.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('social/instagram.svg')
    );
  }
}
