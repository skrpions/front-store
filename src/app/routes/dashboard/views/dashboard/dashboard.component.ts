import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from "../../../../shared/components/sidenav/sidenav.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [CommonModule, SidenavComponent, RouterModule]
})
export class DashboardComponent {

}
