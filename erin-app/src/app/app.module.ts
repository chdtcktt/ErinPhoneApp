import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';



@NgModule({
  declarations: [
    MyApp,
    MapPage,
    AboutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCSfLel6Kl7PB1TOq1Zr94VFWpt-36K0sM'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    AboutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
