import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api/menuitem';
import { LayoutServices } from '../../../services/layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonModule, SidebarModule, PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  sidebarVisible: boolean = false;
  items: MenuItem[] | undefined;
  path: string = ''

  constructor (
    private LayoutServices: LayoutServices,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.items = this.LayoutServices.initMenuItems()
  }

  checkRouter () {
    return this.path = this.router.url
  }

}
