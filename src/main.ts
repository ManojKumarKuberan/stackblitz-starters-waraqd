import 'zone.js/dist/zone';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT, formatNumber, PlatformLocation } from '@angular/common';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientJsonpModule,
} from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      earn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private doc: Document
  ) {
    // document
    //   .getElementById('favIcon')
    //   ?.setAttribute(
    //     'href',
    //     'https://als-static.rewardstep.com/apple-gr/vars/rbc/avion-favicon.svg'
    //   );
    // document.getElementById('favIcon')?.setAttribute('type', 'image/svg+xml');
    // this.http
    //   .get('https://als-static.rewardstep.com/apple-gr/vars/ua/favicon.ico', {
    //     responseType: 'blob',
    //   })
    //   .subscribe(() => {});
    // let link: HTMLLinkElement = this.doc.createElement('link');
    // link.setAttribute('rel', 'stylesheet');
    // // link.setAttribute('size', '16*16');
    // link.setAttribute('type', 'image/x-icon');
    // link.setAttribute(
    //   'href',
    //   'https://als-static.rewardstep.com/apple-gr/vars/ua/favicon.ico?1.0'
    // );
    // this.doc.head.appendChild(link);
    // setTimeout(() => {
    //   this.doc.head.appendChild(link);
    // }, 30000);
    // const timestamp = new Date().getTime();
    // const link =
    //   document.querySelector("link[rel~='icon']") ||
    //   document.createElement('link');
    // // link.rel = 'icon';
    // // link.href = `${'https://als-static.rewardstep.com/apple-gr/vars/default/favicon.ico'}?v=${timestamp}`;
    // link.setAttribute('rel', 'icon');
    // link.setAttribute(
    //   'href',
    //   `${'https://als-static.rewardstep.com/apple-gr/vars/default/favicon.ico'}?v=${timestamp}`
    // );
    // document.getElementsByTagName('head')[0].appendChild(link);
  }

  ngOnInit() {
    const timestamp = new Date().getTime();
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement('link');
    // link.rel = 'icon';
    // link.href = `${'https://als-static.rewardstep.com/apple-gr/vars/default/favicon.ico'}?v=${timestamp}`;

    link.setAttribute('rel', 'icon');
    link.setAttribute(
      'href',
      `${'https://als-static.rewardstep.com/apple-gr/vars/ua/favicon.ico'}?v=${timestamp}`
    );
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}

bootstrapApplication(App);
