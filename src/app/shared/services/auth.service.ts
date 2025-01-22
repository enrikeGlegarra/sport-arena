import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtToken: string | null = null;
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  public userName = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthentication();
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ access_token: string }>('http://localhost:4000/auth/login', credentials).subscribe(
      (response) => {
        const token = response.access_token;
        const decodedToken: { username: string } = jwtDecode(token); // Decodificar el token

        this.jwtToken = token;
        localStorage.setItem('token', this.jwtToken);
        localStorage.setItem('userName', decodedToken.username); // Guardar el username decodificado
        this.isAuthenticated.next(true);
        this.userName.next(decodedToken.username);
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
    localStorage.removeItem('userName');
    this.isAuthenticated.next(false);
    this.userName.next(null);
    this.router.navigate(['/login']);
  }

  getToken() {
    return this.jwtToken || localStorage.getItem('token');
  }

  checkAuthentication() {
    const token = this.getToken();
    if (token) {
      try {
        const decodedToken: { username: string } = jwtDecode(token);
        this.isAuthenticated.next(true);
        this.userName.next(decodedToken.username);
      } catch (error) {
        console.error('Invalid token', error);
        this.isAuthenticated.next(false);
        this.userName.next(null);
      }
    } else {
      this.isAuthenticated.next(false);
      this.userName.next(null);
    }
  }
}
