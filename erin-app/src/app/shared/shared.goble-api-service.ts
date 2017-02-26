import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { Location, FilterKeyword  } from './models/location';
import { SearchFilter} from '../../app/shared/models/searchFilter'




@Injectable()
export class GobleApi {
    private baseUrl = 'https://goble-cff16.firebaseio.com';



    constructor(private http: Http) {

    }

    getLocations(): Observable<Location[]> {
        return this.http
            .get(`${this.baseUrl}/locations.json`, { headers: this.getHeaders() })
            .map(response => {
                return response.json() as Location[];
            });
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