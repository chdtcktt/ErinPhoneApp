import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { Location } from './models/location';
import { SearchFilter } from '../../app/shared/models/searchFilter'




@Injectable()
export class GobleApi {
    private baseUrl = 'https://goble-cff16.firebaseio.com';

    constructor(private http: Http) {

    }

    // getLocations(): Observable<Location[]> {
    //     return this.http
    //         .get(`${this.baseUrl}/locations.json`, { headers: this.getHeaders() })
    //         .map(response => {
    //             return response.json() as Location[];
    //         });
    // }

    getLocations(): Location[] {
        let response: Location[] = new Array;
        response.push(
            {
                id: 1,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                filterIds: [1],
                imageUrl: "",
                name: "Business 1"
            },
            {
                id: 1,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                filterIds: [2],
                imageUrl: "",
                name: "Business 2"
            });
        return response;
    }

    getSearchFilters(): SearchFilter[] {
        let response: SearchFilter[] = new Array;
        response.push(
            {
                id: 1,
                name: 'Recycle',
                selected: false
            },
            {
                id: 2,
                name: 'Donate',
                selected: false
            },
            {
                id: 3,
                name: 'Cause 3',
                selected: false
            },
            {
                id: 4,
                name: 'Cause 4',
                selected: false
            }
        );

        return response;
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

}