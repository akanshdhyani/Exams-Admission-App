import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services';
// import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private readonly TOKEN_KEY = 'access_token';
  showProfileNavBar = false;
  private userData: any;
  userName: string;
 constructor(private router: Router, private authService: AuthServiceService){
 }

 ngOnInit() {
  const token = this.getToken();
  if(token) {
    this.showProfileNavBar = true;
    this.userData = this.authService.getUserData();
    //console.log(this.userData);
    this.generateUserName();
  }
 }

 getToken(): string | null {
  return localStorage.getItem(this.TOKEN_KEY);
}

logout(){
  this.authService.logout();
  this.router.navigate(['/']);
 }

 generateUserName() {
  const firstName = this.userData?.userRepresentation?.firstName;
  const lastName = this.userData?.userRepresentation?.lastName;
  this.userName = firstName?.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}

 navigateToProfilePage(){
  this.router.navigate(['/user-profile']);
 }
}
