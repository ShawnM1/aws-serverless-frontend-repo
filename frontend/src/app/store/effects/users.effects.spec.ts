import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { UsersEffects } from './users.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { UserActions } from '../actions/action-types';

describe('UsersEffects', () => {
  let actions$: Observable<Action>;
  let userService: UserService
  let usersEffects: UsersEffects

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersEffects,
        provideMockActions(() => actions$),
        { provide: UserService, useValue: { getUsers: jest.fn().mockResolvedValue([])} },
      ],
    });

    userService = TestBed.inject(UserService);
    usersEffects = TestBed.inject(UsersEffects);
    actions$ = TestBed.inject(Actions)
  });
  describe('loadUsers$', () => {
    it('should call the user service and return a success action', done => {
      // Default userService mock provided by beforeEach
      actions$ = of(UserActions.getUsers)
      usersEffects.loadUsers$.subscribe(res => {
        expect(res).toEqual(UserActions.getUsersSuccess([]))
      })
      expect(userService.getUsers).toHaveBeenCalled();
      done()
    });
  });
});
