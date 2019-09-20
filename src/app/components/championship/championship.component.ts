import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../api-call.service'
@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent implements OnInit {
  data : any;
  constructor(private apiCall : ApiCallService) { }

  ngOnInit() {
    this.apiCall.getChampionshipEventStats()
      .subscribe(result => this.data = result)
  }

}
