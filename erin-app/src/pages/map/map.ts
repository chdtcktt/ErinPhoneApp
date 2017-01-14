import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  AboutPage } from '../pages';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  map: any = {};
  aboutTab = AboutPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');


    this.map = {
      lat: 47.6201451,
      lng: -122.3298646,
      zoom: 12,
      markerLabel: 'PLACE'
    };
  }

}
