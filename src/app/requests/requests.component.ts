import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests = [];

  constructor(private requestService: RequestsService) { }

  ngOnInit() {
    this.requestService.getAllRequests().subscribe(requests => {
      this.requests = requests;
    });
  }

}
