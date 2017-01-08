import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MapPage;


  constructor(public platform: Platform) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  GoMap(){
    this.nav.push(MapPage);
  }

  GoAbout(){
    this.nav.push(AboutPage);
  }
}
