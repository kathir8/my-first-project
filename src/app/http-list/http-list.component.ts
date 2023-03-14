import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-list',
  templateUrl: './http-list.component.html',
  styleUrls: ['./http-list.component.css']
})
export class HttpListComponent implements OnInit {

  url = "https://api/github.com/users"
  users: any
  loading:boolean = false

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.loading = true
    this.http.get(this.url).subscribe(res => {
      this.loading = false
      console.log("success");
      console.log(res);
      this.users = res
    }, error => {
      this.loading = false
      console.log("error");
      console.log(error);
    }, () => {
      console.log("completed");
    })
  }
}
