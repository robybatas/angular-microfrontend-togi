import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { RemoteComponentOptions } from './services/app.routes.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chart',
    pathMatch: 'full'
  },
  {
    path: 'chart',
    loadComponent: async () => {
      try {
        const chartModule = await loadRemoteModule(
          RemoteComponentOptions.chart()
        );
        return chartModule.AppComponent;
      } catch (err) {
        return console.log(err);
      }
    },
  },
  {
    path: 'crud',
    loadComponent: async () => {
      try {
        const crudModule = await loadRemoteModule(
          RemoteComponentOptions.crud()
        );
        return crudModule.AppComponent;
      } catch (err) {
        return console.log(err);
      }
    },
  },
];
