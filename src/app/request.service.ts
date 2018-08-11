import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getRequestByID(id: string) {
    return this.http.get(`/api/requests/${id}`)
  }

  deleteRequestByID(id: string) {
    return this.http.delete(`/api/requests/${id}`)
  }
}
