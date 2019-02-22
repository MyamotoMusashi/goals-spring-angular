import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { SupportRequest } from './models/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getAllRequests() {
    return this.http.get('/api/requests')
  }

  addRequest(request: SupportRequest) {
    let body = new HttpParams()
      .append('title', request.title)
      .append('id', request.id)
      .append('info', request.info)
      .append('description', request.description)
      .append('isItFreshInstall', request.isItFreshInstall)
      .append('stepsToReproduce', request.stepsToReproduce)
      .append('customerExpectation', request.customerExpectation)
      .append('oneMachineOrAll', request.oneMachineOrAll)
      .append('hotfixes', request.hotfixes)
      .append('relatedDocuments', request.relatedDocuments)
      .append('troubleshooting', request.troubleshooting)
      .append('dataCollection', request.dataCollection)
      .append('requestStatus', request.requestStatus)
      .append('storage', request.storage)
    console.log(body.toString());
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
    return this.http.post('/api/requests', body.toString(),options)
  }
}