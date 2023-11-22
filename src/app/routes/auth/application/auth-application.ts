import { Inject, inject, Injectable } from '@angular/core';
import { AuthInfrastructure } from "../infrastructure/auth-infrastructure";
import { AuthRepository } from "../domain/repositories/auth-repository";
import { Router } from "@angular/router";
import { TokenEntity } from "../domain/entities/token-entity";

@Injectable()
export class AuthApplication {

  private router = inject(Router);

  constructor(@Inject(AuthInfrastructure) private readonly authRepository: AuthRepository) {}

  login(auth: any) {
    this.authRepository.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: this.showMessageError,
    });
  }

  private userAuthenticated(response: TokenEntity) {

    console.log('✅ userAuthenticated', response);

    /* this.storageRepository.setStorage('token', response.token);
    this.userLogged = true;
     */
    this.router.navigateByUrl('/dashboard/home');
  }

  private showMessageError(error: any) {
    console.log('Error: ', error);
  }
}
