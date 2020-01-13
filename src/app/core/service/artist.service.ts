import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

// to register ArtistService as a service, we need to specify INJECTABLE decorator
@Injectable({
  providedIn: 'root' // It will allow service to be used in the entire project
})
export class ArtistService {
  baseUrl = environment.api_url + '/artists/'; // Get api_url from environment (development)

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { } // for http service, HTTPClient is injected

  // artistName is injected from homeComponent when calling this service.
  // Get request for the endpoint (https://rest.bandsintown.com/artists/{artistName})
  getArtistList(artistName: string): Observable<any> {
    return this._http.get<any>(this.baseUrl + artistName + '?app_id=510');
  }
}
