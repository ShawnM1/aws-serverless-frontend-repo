import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.interface";
import { getUsersSuccess } from "../actions/users.action";

export interface UserState {
    users: User[]
}

const initialState: UserState = {
    users: []
}

export const usersReducer = createReducer(
    initialState,
    on(getUsersSuccess, (state, { users }) => {
        return { ...state, users}
    })
)