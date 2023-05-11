import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private httpService: HttpService) { }
  
 

  fetchTodos(url: string) {
    return this.httpService.getCall(url)
  }
}
