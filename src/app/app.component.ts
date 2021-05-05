import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    public platform: Platform
  ) {

    this.platform.ready().then(() => {
      // 'hybrid' detects both Cordova and Capacitor
      if (this.platform.is('hybrid')) {
        // make your native API calls
        console.log('platform is hybrid');
      } else {
        // fallback to browser APIs
        console.log(platform);
      }
    });

  }

}
