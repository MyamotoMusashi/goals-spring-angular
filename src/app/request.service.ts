import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: Http) { }

  getRequestByID(string id) {
  return this.http.get(`/api/requests/${id}`)
    .pipe(map((response: any) => response.json()));
  }
}
