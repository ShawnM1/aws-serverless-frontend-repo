import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { AppState } from 'src/app/store/app-state.interface';
import { usersSelector } from 'src/app/store/selectors/users.selector';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]> = this.store.select(usersSelector)

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

}
