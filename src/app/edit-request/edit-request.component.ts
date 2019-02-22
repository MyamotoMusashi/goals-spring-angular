import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { SupportRequest } from '../models/request.model';
import { RequestsService } from '../requests.service';
import {RequestService} from '../request.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css']
})
export class EditRequestComponent implements OnInit {
  request = new SupportRequest("","","","","","","","","","","","");


  constructor(private requestService: RequestService, private requestsService: RequestsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.requestService.getRequestByID(id).subscribe(request => {
      this.request = request;
    })
  }

  editRequest() {
    const id = this.route.snapshot.paramMap.get('id');
    this.requestService.editRequestByID(id, this.request).subscribe(() => {
      this.router.navigate([`/requests/${id}`])
    });
  }
}  
