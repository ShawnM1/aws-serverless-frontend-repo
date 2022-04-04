import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from './store/actions/users.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }

}
