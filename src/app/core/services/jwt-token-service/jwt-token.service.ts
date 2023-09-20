import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  private accessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  accessToken$: Observable<string | null> = this.accessTokenSubject.asObservable();

  constructor() {}

  // Set the access token
  setAccessToken(token: string | null): void {
    this.accessTokenSubject.next(token);
  }

  // Get the access token
  getAccessToken(): string | null {
    return this.accessTokenSubject.value;
  }

  // Check if the access token is expired (you can implement your own logic here)
  isAccessTokenExpired(): boolean {
    const token = this.getAccessToken();
    if (!token) {
      return true; // Token doesn't exist
    }

    // Implement your expiration logic here
    // Example: Check if the token has expired based on its contents (if it's a JWT token)
    // Replace this with your specific logic
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    const expirationDate = new Date(tokenData.exp * 1000);
    const currentDate = new Date();

    return expirationDate <= currentDate;
  }

  // Clear the access token
  clearAccessToken(): void {
    this.accessTokenSubject.next(null);
  }
}
