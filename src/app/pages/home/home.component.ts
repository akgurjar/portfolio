import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '../../constants/links';
import { ChatService } from '../../chat.service';

const TITLES = [
  'Ashish Gurjar',
  'A Developer',
  'A Technical Lead',
  'A JavaScript Enthusiast',
];

const SKILLS = [
  { logo: 'skills/deno.svg', title: 'DenoJS' },
  { logo: 'skills/nodejs.svg', title: 'NodeJS' },
  { logo: 'skills/nestjs.svg', title: 'NestJS' },
  { logo: 'skills/fastify.svg', title: 'Fastify' },
  { logo: 'skills/hapi.svg', title: 'HapiJS' },
  { logo: 'skills/expressjs.svg', title: 'ExpressJS' },
  { logo: 'skills/postgres.png', title: 'Postgres' },
  { logo: 'skills/mongodb.png', title: 'MongoDB' },
  { logo: 'skills/redis.png', title: 'Redis' },
  { logo: 'skills/nodejs.svg', title: 'Neo4J' },
  { logo: 'skills/grpc.png', title: 'gRPC' },
  { logo: 'skills/kafka.png', title: 'Kafka' },
  { logo: 'skills/angular.svg', title: 'Angular' },
  { logo: 'skills/reactjs.webp', title: 'React JS' },
  { logo: 'skills/html.svg', title: 'HTML 5' },
  { logo: 'skills/css.svg', title: 'CSS 3' },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = '';
  get githubUrl() {
    return GITHUB_URL;
  }
  get linkedinUrl() {
    return LINKEDIN_URL;
  }
  get twitterUrl() {
    return TWITTER_URL;
  }
  readonly skills = SKILLS;
  platformId: Object = inject(PLATFORM_ID);
  constructor(public chatService: ChatService) {}
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
  showChat() {
    this.chatService.toggle(true);
  }
}
