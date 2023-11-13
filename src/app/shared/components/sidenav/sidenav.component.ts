import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { MaterialModule } from '../../material.module';
import { RouterModule, Router } from '@angular/router';

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

  username = '';
  mobileQuery!: MediaQueryList; // Responsive media query
  menuNav = [
    {name: "Home", route: "home", icon: "dashboard"},
    {name: "Categorías", route: "categories", icon: "category"},
    {name: "Productos", route: "products", icon: "add_shopping_cart"}
  ]

  ngOnInit(): void {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    //this.username = this.keyCloakSrv.getUsername();
  }

  logout(): void {
    this.router.navigateByUrl('/');
  }

}
