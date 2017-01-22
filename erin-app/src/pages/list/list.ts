import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GobleApi} from '../../app/shared/shared';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  locations:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gobleApi: GobleApi ) {
     this.locations = this.gobleApi.getLocations();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  

}
