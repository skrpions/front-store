import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ProductApplication } from './routes/products/application/product-application';
import { ProductInfrastructure } from './routes/products/infrastructure/product-infrastructure';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { AuthApplication } from './routes/auth/application/auth-application';
import { AuthInfrastructure } from './routes/auth/infrastructure/auth-infrastructure';
import { StorageInfrastructure } from './routes/auth/infrastructure/storage-infrastructure';
import { StorageApplication } from './routes/auth/application/storage-application';
import { tokenInterceptor } from './core/interceptors/token.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';

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
    provideHttpClient(withInterceptors([tokenInterceptor, errorInterceptor])),
    provideToastr(), // Toastr providers
    ...application,
    ...infrastructure,

  ]
};
