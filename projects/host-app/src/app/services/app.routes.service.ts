import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class RemoteComponentOptions {
  static chart(): import("@angular-architects/module-federation").LoadRemoteModuleOptions {
    return {
      remoteEntry: 'http://localhost:4201/chartModule.js',
      remoteName: 'chartModule',
      exposedModule: './Component',
    };
  }
  static crud(): import("@angular-architects/module-federation").LoadRemoteModuleOptions {
    return {
      remoteEntry: 'http://localhost:4207/crudModule.js',
      remoteName: 'crudModule',
      exposedModule: './Component',
    };
  }
}
