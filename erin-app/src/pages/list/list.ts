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
  unFilteredLocations: Location[];
  filterSelected: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gobleApi: GobleApi) { }

  ionViewDidLoad() {
    this.loadLocations();
  }

  loadLocations() {
    this.gobleApi.getLocations()
      .subscribe(
      result => {
        this.locations = result;
        this.unFilteredLocations = result;
      });
  }


  getItems(ev: any) {
    this.locations = this.unFilteredLocations;
    let query = ev.target.value.toLowerCase();
    let filteredLocations = [];

    this.locations.forEach(loc => {

      if (loc.name.toLowerCase().includes(query)) {
        filteredLocations.push({
          id: loc.id,
          name: loc.name,
          description: loc.description
        });
      }

    });

    this.locations = filteredLocations;
  }

  storeTapped($event, location) {
    this.navCtrl.push(LocationPage, location);
  }

  filterClick($event, filter) {
    console.log($event);
    console.log(filter);
     
     this.filterSelected = true;

  }
}


