import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../api-call.service'
@Component({
  selector: 'app-npl-premier-division',
  templateUrl: './npl-premier-division.component.html',
  styleUrls: ['./npl-premier-division.component.css']
})
export class NplPremierDivisionComponent implements OnInit {
  data : any;
  constructor(private apiCall : ApiCallService) { }

  ngOnInit() {
    this.apiCall.getNplEventStats()
      .subscribe(result => this.data = result)
  }

}
