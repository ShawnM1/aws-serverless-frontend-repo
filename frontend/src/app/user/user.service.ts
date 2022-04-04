import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.interface";

const URL = 'https://77l721wbx7.execute-api.us-east-1.amazonaws.com/prod/'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private httpClient: HttpClient) {}

    public getUsers() : Observable<User[]> {
        return this.httpClient.get<User[]>(URL)
    }
}