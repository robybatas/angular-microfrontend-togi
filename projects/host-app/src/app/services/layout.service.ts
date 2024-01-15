import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutServices {

  initMenuItems() {
    return [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-line',
        routerLink: ['/chart']
      },
      {
        label: 'CRUD',
        icon: 'pi pi-fw pi-database',
        routerLink: 'crud'
      },
    ];
  }

  initHeaderText() {
    return [
      'm',
      'mi',
      'mic',
      'micr',
      'micro',
      'micro ',
      'micro f',
      'micro fr',
      'micro fro',
      'micro fron',
      'micro front',
      'micro fronte',
      'micro fronten',
      'micro frontend',
    ];
  }

}
