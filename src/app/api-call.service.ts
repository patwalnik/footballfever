import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teams } from './components/container/container.model'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  getTeamsApi = 'https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=';
  constructor(private _http: HttpClient) { }

  getTeams(){
    return this._http.get<Teams[]>(this.getTeamsApi + environment.ffApiKey);
  }
}
