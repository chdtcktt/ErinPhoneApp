import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { Location } from './models/location';




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

    private getHeaders() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

}