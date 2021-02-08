import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ItemsResult, User, UserDetail } from '../models';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  searchUsers(query: string, page: number = 0, perPage: number = 10): Observable<ItemsResult<User>> {
    return this.http.get<ItemsResult<User>>(`${environment.githubApi}/search/users`, {
      headers: { Authorization: `token 278ba7728896d535159e13ce35976d817a8c8f3c`},
      params: {
        q: query,
        page: page.toString(),
        per_page: perPage.toString()
      }
    });
  }

  getUser(login: string): Observable<UserDetail> {
    return this.http.get<UserDetail>(`${environment.githubApi}/users/${login}`, { headers: { Authorization: `token 278ba7728896d535159e13ce35976d817a8c8f3c`}});
  }

  getUserFollowers(login: string, page: number = 0, perPage: number = 10): Observable<User[]> {
    return this.http.get<User[]>(`${environment.githubApi}/users/${login}/followers`, {
      headers: { Authorization: `token 278ba7728896d535159e13ce35976d817a8c8f3c`},
      params: {
        page: page.toString(),
        per_page: perPage.toString()
      }
    });
  }

}
