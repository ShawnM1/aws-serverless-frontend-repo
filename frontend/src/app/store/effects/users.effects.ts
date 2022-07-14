import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { UserService } from "src/app/user/user.service";
import { UserActions } from "../actions/action-types";
import { getUsersSuccess } from "../actions/users.action";

@Injectable()
export class UsersEffects {
    constructor(private action$: Actions, private userService: UserService) {}

    loadUsers$ = createEffect(() => 
        this.action$.pipe(
            ofType(UserActions.getUsers),
            exhaustMap(() => this.userService.getUsers().pipe(
                map((users) =>{ 
                    return getUsersSuccess(users)}
                )
            )
        ))
    )
}