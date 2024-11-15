import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import { DefaultSystemBrowserOptions, DefaultWebViewOptions, InAppBrowser } from '@capacitor/inappbrowser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonItem, IonList, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}

  openExternal() {
    InAppBrowser.openInExternalBrowser({
      url: 'https://www.google.com',
    });
  }

  openSystem() {
    InAppBrowser.openInSystemBrowser({
      url: 'https://www.google.com',
      options: DefaultSystemBrowserOptions,
    });
  }

  openWebView() {
    InAppBrowser.openInWebView({
      url: 'https://www.google.com',
      options: DefaultWebViewOptions,
    });
  }
}
