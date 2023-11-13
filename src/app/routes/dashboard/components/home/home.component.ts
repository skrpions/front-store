import { ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../shared/material.module';
import { Router, RouterModule } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  /* icon_header = 'dashboard';
  title_header = 'Dashboard';

  chartBar: any;
  chartDoughnut: any;

  //private readonly productApplication = inject(ProductApplication);


  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private router: Router ,private observer: BreakpointObserver, private change: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res:any) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    this.change.detectChanges();
  }

  logout() {
    this.router.navigateByUrl('/');
  } */

}
