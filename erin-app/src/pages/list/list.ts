import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LocationPage } from '../pages';
import { Location } from '../../app/shared/models/location';
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

  // loadLocations() {
  //   this.gobleApi.getLocations()
  //     .subscribe(
  //     result => {
  //       this.locations = result;
  //       this.unFilteredLocations = result;
  //     });
  // }

  loadLocations() {
    this.locations = this.gobleApi.getLocations();
    this.unFilteredLocations = this.gobleApi.getLocations();
  }

  loadFilters() {
    this.searchFilters = this.gobleApi.getSearchFilters();
  }

  filterListItemsBySearch(ev: any) {
    this.locations = this.unFilteredLocations;
    let query = ev.target.value.toLowerCase();
    let filteredLocations = [];

    this.locations.forEach(loc => {
      //filter open search
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

  filterListItemsByFilterId(filterId: number) {
    this.locations = this.unFilteredLocations;

    if (filterId != 0) {
      let filteredLocations = [];

      this.locations.forEach(loc => {
        //filter open search
        if (loc.filterIds.find((id) => {

          if (id === filterId) {
            return true;

          } else {
            return false;
          }

        })) {
          filteredLocations.push({
            id: loc.id,
            name: loc.name,
            description: loc.description
          });
        }
      });
      this.locations = filteredLocations;
    }
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
          this.filterListItemsByFilterId(0)

        } else {
          f.selected = true;

          //logic to filter based on key id
          this.filterListItemsByFilterId(filter.id)
        }
      }
    }




  }
}


