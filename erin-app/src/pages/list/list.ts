import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocationPage } from '../pages';
import { Location, FilterKeyword } from '../../app/shared/models/location';
import { SearchFilter } from '../../app/shared/models/searchFilter';

import { GobleApi } from '../../app/shared/shared';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  locations: Location[];
  unFilteredLocations: Location[];

  searchFilters: SearchFilter[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private gobleApi: GobleApi) { }

  ionViewDidLoad() {
    this.loadLocations();
    this.loadFilters();
  }

  loadLocations() {
    this.gobleApi.getLocations()
      .subscribe(
      result => {
        this.locations = result;
        this.unFilteredLocations = result;
      });
  }

  loadFilters() {
    this.searchFilters = this.gobleApi.getSearchFilters();
  }

  getListItems(ev: any) {
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


  filterTapped($event, filter: SearchFilter) {
    console.log($event);
    console.log(filter);

    for (let f of this.searchFilters) {
      if (f.id === filter.id) {
        if (f.selected) {
          f.selected = false;
        } else {
          f.selected = true;
        }
      }
    }
  }
}


