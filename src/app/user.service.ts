import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserItem } from './user-item';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getItem():Observable<Array<UserItem>> {
    return <Observable<Array<UserItem>>>this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
