import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare const window: any;

@Injectable({ providedIn: 'root' })
export class OnlineOfflineService {
  private internalConnectionChanged = new Subject<boolean>();

  get connectionChanged() {
    return this.internalConnectionChanged.asObservable();
  }

  get isOnline() {
    return !!window.navigator.onLine;
  }

  // Listen to network status change
  constructor() {
    window.addEventListener('online', () => this.updateOnlineStatus());
    window.addEventListener('offline', () => this.updateOnlineStatus());
  }

  // Send a network status update to the observable's listeners
  private updateOnlineStatus() {
    this.internalConnectionChanged.next(window.navigator.onLine);
  }
}
