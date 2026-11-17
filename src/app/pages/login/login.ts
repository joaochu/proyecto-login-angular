import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(Auth);

  iniciarSesionGoogle() {
    this.authService.loginWithGoogle().catch((error) => {
      console.error('Error al iniciar sesión:', error);
    });
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
