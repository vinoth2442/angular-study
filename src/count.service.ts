import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CountService {
  writeCount(count: number) {
    console.warn(count);
  }
}
