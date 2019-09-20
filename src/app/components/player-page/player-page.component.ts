import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {
  players;
  coaches;
  searchPlayer :string;
  temp : any;
  constructor(private route : ActivatedRoute , private location:Location, private router:Router) {}
  ngOnInit() {
    const mapped = Object.keys(this.location.getState()).map(key => {
      return this.location.getState()[key];
    })
    this.players = mapped[0];
    this.temp = mapped[0];
    this.coaches = mapped[1];
    } 

    sortByName($event , order :string){
      return this.players.sort((a: any, b : any) => {
      var nameA = a.player_name.toLocaleLowerCase(); // ignore upper and lowercase
      var nameB = b.player_name.toLocaleLowerCase(); // ignore upper and lowercase
      if( order == 'asc'){
      if (nameA < nameB) {
        return -1;
      } 
      if (nameA > nameB) {
        return 1;
      } return 0;
     }
     else{
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    // names must be equal
      return 0;
     } });
     
    }
    sortByGoals($event, order: string){
        if(order == 'asc'){
          return this.players = this.players.sort((a,b)=> a.player_goals - b.player_goals)
        }
        if(order == 'dec'){
          return this.players = this.players.sort((a,b)=> b.player_goals - a.player_goals)
        }
    }
    sortByAge($event, order : string){
      if(order == 'asc'){
        return this.players = this.players.sort((a,b)=> a.player_age - b.player_age)
      }
      if(order == 'dec'){
        return this.players = this.players.sort((a,b)=> b.player_age - a.player_age)
      }
  }
  
  filterBy($event , value : string){
     this.players = this.temp
    if(value == 'gt2'){
    return this.players=  this.players.filter((value, index) => value.player_match_played > 2)
    
    }
    if(value == 'lt2'){
      return this.players = this.players.filter((value, index) => value.player_match_played < 2)
      
    }
  }
  }



