import { Component } from '@angular/core';
import { of, map, filter, combineLatest } from 'rxjs'

@Component({
  selector: 'app-complex',
  template: `<div *ngIf="data$ | async as data">
      <div *ngFor="let user of data.users">
      {{user.name}}
      </div>
      ------------------
      <div *ngFor="let user of data.usernames">
      {{user}}
      </div>
      ------------------
      <div *ngFor="let user of data.filteredUsers">
      {{user.name}}
      </div>
    </div>`
})
  
export class ComplexComponent {
  users = [
    { id: 1, name: 'John', isActive: true },
    { id: 2, name: 'Jack', isActive: true },
    { id: 3, name: 'Mike', isActive: true },
  ];

  users$ = of(this.users);

  usernames$ = this.users$.pipe(map((users) => users.map((user) => user.name)))
  
  filteredUsers$ = this.users$.pipe(
    filter((users) => users.some((users) => users.isActive)))

  data$ = combineLatest([
    this.users$,
    this.usernames$,
    this.filteredUsers$,
  ]).pipe(map(([users, usernames, filteredUsers]) => ({
    users,
    usernames,
    filteredUsers
  })))
  
}
