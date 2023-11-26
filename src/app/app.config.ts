import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProductApplication } from './routes/products/application/product-application';
import { ProductInfrastructure } from './routes/products/infrastructure/product-infrastructure';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { AuthApplication } from './routes/auth/application/auth-application';
import { AuthInfrastructure } from './routes/auth/infrastructure/auth-infrastructure';
import { StorageInfrastructure } from './routes/auth/infrastructure/storage-infrastructure';
import { StorageApplication } from './routes/auth/application/storage-application';

const application = [
  AuthApplication,
  StorageApplication,
  ProductApplication,
];
const infrastructure = [
  AuthInfrastructure,
  StorageInfrastructure,
  ProductInfrastructure,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideToastr(), // Toastr providers
    ...application,
    ...infrastructure
  ]
};
