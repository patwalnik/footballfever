import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teams } from './components/container/container.model'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  getTeamsApi = 'https://apiv2.apifootball.com/?action=get_teams&league_id=148&APIkey=';
  getPlayerApi = 'https://apiv2.apifootball.com/?action=get_players&player_id='
  getChampionshipEventApi = 'https://apiv2.apifootball.com/?action=get_events&from=2019-01-01&to=2019-04-30&league_id=149&APIkey='
  getNplEventApi = 'https://apiv2.apifootball.com/?action=get_events&from=2019-01-01&to=2019-04-30&league_id=156&APIkey='
  constructor(private _http: HttpClient) { }

  getTeams(){
    return this._http.get<Teams[]>(this.getTeamsApi + environment.ffApiKey);
  }
  getPlayerProfile(playerKey : string){
      return this._http.get(this.getPlayerApi + playerKey+ '&APIkey='+ environment.ffApiKey);
  }
  getChampionshipEventStats(){
    return this._http.get(this.getChampionshipEventApi+ environment.ffApiKey)
  }
  getNplEventStats(){
    return this._http.get(this.getNplEventApi+ environment.ffApiKey)
  }
}
