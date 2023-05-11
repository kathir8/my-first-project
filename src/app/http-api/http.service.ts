import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api_url = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient) { }
  
  getCall(url:string):Observable<any> {
    return this.http.get(this.api_url + url)
    .pipe(retry(1),catchError(error => this.handleError(error)))
  }

  handleError(error:any) {
    const errorObj = {
      "status": false,
      "status_code": error.status,
      "message": error.error
    };
   
    return throwError(() => {
      return errorObj
    })
  }
}
