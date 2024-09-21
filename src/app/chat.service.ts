import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  readonly #isShown = signal(false);
  readonly isShown = computed(() => this.#isShown());
  constructor() {}
  toggle(val: boolean): void {
    this.#isShown.set(val);
  }
}
