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
    },
    {
      path:"new-paquete",
      loadChildren: () => import('./paquetes/add-paquete/add-paquete-routing.module').then (m => m.AddPaquetePageRoutingModule)
    }
      
    ]
  },
  {
    path:"new-paquete",
    loadChildren: () => import('./paquetes/add-paquete/add-paquete.module').then (m => m.AddPaquetePageModule)
  },
  {
    path:'new-repartidor',
    loadChildren:() => import('./repartidores/add-repartidor/add-repartidor.module').then (m => m.AddRepartidorPageModule)
  },
  {
    path: 'repartidores',
    children: [{
      path:"",
      loadChildren: () => import('./repartidores/repartidores.module').then( m => m.RepartidoresPageModule)
    },
    {
      path:":repartidorId",
      loadChildren: () => import('./repartidores/repartidor-detail/repartidor-detail.module').then(m => m.RepartidorDetailPageModule)
    },
    {
      path:'new-repartidor',
      loadChildren: () => import('./repartidores/add-repartidor/add-repartidor-routing.module').then(m => m.AddRepartidorPageRoutingModule)
    }

    ]

  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
