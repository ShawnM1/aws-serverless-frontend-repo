import { createAction } from "@ngrx/store";
import { User } from "src/app/models/user.interface";

export const getUsers = createAction('[User] Get Users')
export const getUsersSuccess = createAction('[User] Get Users Success', (users: User[]) => ({ users }))