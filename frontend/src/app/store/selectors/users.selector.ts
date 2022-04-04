import { createSelector } from "@ngrx/store";
import { User } from "src/app/models/user.interface";
import { AppState } from "../app-state.interface";


export const usersSelector = createSelector(
    (state: AppState) => state.user.users,
    (users: User[]) => users
)