import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://chatapi.edwisor.com/api/v1/users';

  constructor(
    private http: HttpClient
  ) { }

  public getUserDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public setUserDataInLocalStorage(data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
  }

  public signUp(userDetails): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userDetails);
  }

  public logIn(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}
