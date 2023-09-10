import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'paquetes',
    children: [{
      path:"",
      loadChildren: () => import('./paquetes/paquetes.module').then( m => m.PaquetesPageModule)
    },
    {
      path:":paqueteId",
      loadChildren: () => import('./paquetes/paquete-detail/paquete-detail.module').then(m => m.PaqueteDetailPageModule)
    }
      
    ]
  },
  {
    path: 'repartidores',
    loadChildren: () => import('./repartidores/repartidores.module').then( m => m.RepartidoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
