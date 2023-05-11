import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private httpService: HttpService) { }
  
 

  fetchTodos(url: string,cbk:any) {
    this.httpService.getCall(url).subscribe({
      next: (res) => cbk(true,res),
      error: (err) => cbk(false, err)
    })
  }
}
