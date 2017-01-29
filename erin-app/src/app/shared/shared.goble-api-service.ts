import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class GobleApi {
    private baseUrl = 'https://goble-cff16.firebaseio.com/';

    constructor(private http: Http) {

    }

    getLocations() {
        return [ {
            id: 1,
            name: "Store1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        }];
    }

}