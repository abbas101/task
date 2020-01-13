import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseUrl = environment.api_url + '/artists/';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {}

  // Get request for the endpoint (https://rest.bandsintown.com/artists/{artistName}/events)
  getEvent(artistName: string): Observable<any> {
    return this._http.get<any>(this.baseUrl + artistName + '/events/' + '?app_id=510&date=2015-05-05');
  }
}
