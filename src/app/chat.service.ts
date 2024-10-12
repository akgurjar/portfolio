import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  readonly #isShown = signal(false);
  readonly isShown = computed(() => this.#isShown());
  constructor(public http: HttpClient) {}
  toggle(val: boolean): void {
    this.#isShown.set(val);
  }
  async command(body: string): Promise<string> {
    const req = this.http.post<string>('/api/chat', body);
    return await lastValueFrom(req);
  }
}
