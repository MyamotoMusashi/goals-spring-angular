import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { SupportRequest } from '../models/request.model';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  request = new SupportRequest("", "", "", "", "", "", "", "", "", "", "", "", )


  constructor(private requestsService: RequestsService, private router: Router) { }

  ngOnInit() {
  }

  addRequest() {
    this.requestsService.addRequest(this.request).subscribe(response => {
      this.router.navigateByUrl('/requests')
    });
  }

}
