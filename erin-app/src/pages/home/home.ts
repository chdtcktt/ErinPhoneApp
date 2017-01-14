import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  MapPage, AboutPage } from '../pages';


/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  aboutTab = AboutPage;
  mapTab = MapPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
