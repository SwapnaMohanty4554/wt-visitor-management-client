import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RefdataService {

  constructor(private http: HttpClient) { }

  refDataObj: any = {};

  public getRefdata(): Observable<any> {
    return this.http
      .get(`${environment.ref_api_url}`);
  }

}
