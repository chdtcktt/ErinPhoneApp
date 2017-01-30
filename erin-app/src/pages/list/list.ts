import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocationPage } from '../pages';
import { GobleApi } from '../../app/shared/shared';
import { Location } from '../../app/shared/models/location'


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  locations: Location[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private gobleApi: GobleApi) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');

    this.gobleApi.getLocations()
      .subscribe(
      result => {
        this.locations = result;
      });
  }

  storeTapped($event, location) {
    this.navCtrl.push(LocationPage, location);
  }
}


