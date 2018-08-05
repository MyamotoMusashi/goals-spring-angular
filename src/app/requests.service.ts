import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: Http) { }

  getAllRequests() {
    return this.http.get('/api/requests')
    .pipe(map((response: any) => response.json()));
  }
}
