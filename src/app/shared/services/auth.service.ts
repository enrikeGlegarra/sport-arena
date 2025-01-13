import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtToken: string | null = null;
  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string }>('http://localhost:4000/auth/login', credentials).subscribe(
      (response) => {
        this.jwtToken = response.token;
        localStorage.setItem('token', this.jwtToken);
        this.isAuthenticated.next(true);
        this.router.navigate(['/time-line']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  logout() {
    this.jwtToken = null;
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }

  getToken() {
    return this.jwtToken || localStorage.getItem('token');
  }
}
