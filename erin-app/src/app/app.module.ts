import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';
import { HomePage, MapPage, ListPage, AboutPage } from '../pages/pages';
import { GobleApi } from './shared/shared';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    AboutPage 
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCSfLel6Kl7PB1TOq1Zr94VFWpt-36K0sM'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    ListPage,
    AboutPage
    ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},GobleApi]
})
export class AppModule {}
