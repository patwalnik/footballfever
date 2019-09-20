import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiCallService} from '../../api-call.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  playerKey; 
  playerData;
  constructor(private route: ActivatedRoute, private apiCall : ApiCallService) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.playerKey = params.get("playerKey")
    })
   
    this.apiCall.getPlayerProfile(this.playerKey)
        .subscribe(data => this.playerData= data)
  }

}
