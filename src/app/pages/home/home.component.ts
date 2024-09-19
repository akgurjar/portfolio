import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../constants/links';

const TITLES = ['Ashish Gurjar', 'A Technical Lead', 'A Developer'];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = '';
  platformId: Object = inject(PLATFORM_ID);
  get githubUrl() {
    return GITHUB_URL;
  }
  get linkedinUrl() {
    return LINKEDIN_URL;
  }
  get twitterUrl() {
    return TWITTER_URL;
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animateTitle(0);
    }
  }
  animateTitle(index: number) {
    if (index >= TITLES.length) {
      index = 0;
    }
    const text = TITLES[index];
    if (!text) {
      return;
    }
    let counter = 0;
    this.title = '';
    const id = setInterval(() => {
      if (counter >= text?.length) {
        clearInterval(id);
        setTimeout(this.animateTitle.bind(this), 1000, index + 1);
      }
      this.title += text.charAt(counter);
      counter++;
    }, 100);
  }
}
