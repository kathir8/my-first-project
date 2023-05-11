import { Component } from '@angular/core';
import { HttpApiService } from './http-api.service';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent {
 
  constructor(private httpApiService: HttpApiService) {}
  ngOnInit() {
    this.getTodos()
  }
  getTodos() {
    this.httpApiService.fetchTodos('/todos').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
