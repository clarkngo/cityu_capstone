import { Component } from '@angular/core';
import { OnlineOfflineService } from './services/online-offline.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store';
  isOnline: boolean = true;

  constructor(
    private onlineOfflineService: OnlineOfflineService
  ) {
    this.isOnline = this.onlineOfflineService.isOnline;
    this.registerToEvents(onlineOfflineService);
  }

  // Display offline icon if offline
  private registerToEvents(onlineOfflineService: OnlineOfflineService) {
    onlineOfflineService.connectionChanged.subscribe(online => {
      this.isOnline = online;
    });
  }
}
