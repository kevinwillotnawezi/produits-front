import { Component } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user = new User();
  erreur = 0;

  constructor(private AuthService: AuthService, private router: Router) {}

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.AuthService.SignIn(this.user);
    if (isValidUser) this.router.navigate(['/']);
    else this.erreur = 1;
    //alert('Login ou mot de passe incorrecte!');
  }
}
