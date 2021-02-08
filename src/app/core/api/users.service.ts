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
      params: {
        q: query,
        page: page.toString(),
        per_page: perPage.toString()
      }
    });
  }

  getUser(login: string): Observable<UserDetail> {
    return this.http.get<UserDetail>(`${environment.githubApi}/users/${login}`);
  }

  getUserFollowers(login: string, page: number = 0, perPage: number = 10): Observable<User[]> {
    return this.http.get<User[]>(`${environment.githubApi}/users/${login}/followers`, {
      params: {
        page: page.toString(),
        per_page: perPage.toString()
      }
    });
  }

}
