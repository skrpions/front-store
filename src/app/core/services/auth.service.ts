import { Inject, Injectable, inject } from '@angular/core';
import { StorageInfrastructure } from '../../routes/auth/infrastructure/storage-infrastructure';
import { Router } from '@angular/router';
import { StorageRepository } from '../../routes/auth/domain/repositories/storage-repository';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);

  constructor(@Inject(StorageInfrastructure) private readonly storageRepository: StorageRepository) {}

  logout() {
    this.storageRepository.clear();
    this.router.navigateByUrl('/');
  }

}
