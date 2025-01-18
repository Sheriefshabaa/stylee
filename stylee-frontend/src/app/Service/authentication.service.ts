import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {jwtDecode} from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
  apiURL = "http://localhost:3000/user/login";

  constructor(private _http: HttpClient) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this._tokenSubject.next(token);
    }
  }

  login(loginData: any): Observable<any> {
    return this._http.post<any>(this.apiURL, loginData).pipe(
      tap(res => {
        const token = res.accessToken;
        if (token) {
          localStorage.setItem('accessToken', token);
          this._tokenSubject.next(token);
          // console.log(res.accessToken);
        }
      }))
  }

  get tokenSubject(): Observable<String | null> {
    return this._tokenSubject.asObservable();
  }

  logout() {
    this._tokenSubject.next(null);
    localStorage.removeItem("accessToken");

  }

  isAuthenticated(): boolean {
    return this._tokenSubject.value !== null;
  }

  decodeAccessToken() {
    const token = this._tokenSubject.value;
    if (token) {
      return jwtDecode<any>(token);
    } else {
      return null;
    }
  }


}
