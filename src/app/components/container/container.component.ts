import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../api-call.service';
import { Teams } from './container.model'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  teams : Teams[];
  constructor(private apiCall : ApiCallService) { }

  ngOnInit() {
    return this.apiCall.getTeams()
      .subscribe(data => this.teams = data)
  }

}
