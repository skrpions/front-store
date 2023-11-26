import { Inject, inject, Injectable } from '@angular/core';
import { AuthInfrastructure } from "../infrastructure/auth-infrastructure";
import { AuthRepository } from "../domain/repositories/auth-repository";
import { Router } from "@angular/router";
import { TokenEntity } from "../domain/entities/token-entity";
import { StorageInfrastructure } from '../infrastructure/storage-infrastructure';
import { StorageRepository } from '../domain/repositories/storage-repository';

@Injectable()
export class AuthApplication {

  private userLogged = false;

  private router = inject(Router);

  constructor(
    @Inject(AuthInfrastructure) private readonly authRepository: AuthRepository,
    @Inject(StorageInfrastructure) private readonly storageRepository: StorageRepository) {}


  login(auth: any) {
    this.authRepository.login(auth).subscribe({
      next: this.userAuthenticated.bind(this),
      error: this.showMessageError,
    });
  }

  private userAuthenticated(response: TokenEntity) {

    this.storageRepository.setStorage('token', response.token);
    this.userLogged = true;

    this.router.navigateByUrl('/dashboard/home');
  }

  private showMessageError(error: any) {
    console.log('Error: ', error);
  }

  get isUserLogged(): boolean {
    const accessToken = this.storageRepository.getStorage('token');

    return !!accessToken || this.userLogged;
  }

  logout(): void {
    this.userLogged = false;
    this.storageRepository.clear();
    this.router.parseUrl('/');
  }
}
