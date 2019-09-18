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
  constructor(private route : ActivatedRoute , private location:Location, private router:Router) {}
  ngOnInit() {
    const mapped = Object.keys(this.location.getState()).map(key => {
      return this.location.getState()[key];
    })
    this.players = mapped[0];
    this.coaches = mapped[1];
    }

  }



