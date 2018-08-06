import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  request = {};

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.getRequestByID().subscribe(request => {
      this.request = request;
    });
  }

}
