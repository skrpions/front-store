import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { MaterialModule } from '../../material.module';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  private media = inject(MediaMatcher);
  private router = inject(Router);
  private authSrv = inject(AuthService);

  username = '';
  mobileQuery!: MediaQueryList; // Responsive media query
  menuNav = [
    {name: "Dashboard", route: "home", icon: "dashboard"},
    {name: "Categories", route: "categories", icon: "category"},
    {name: "Products", route: "products", icon: "add_shopping_cart"}
  ]

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    //this.username = this.keyCloakSrv.getUsername();
  }

  logout(): void {
    this.authSrv.logout();
  }

}
