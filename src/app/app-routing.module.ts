import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '',
  loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)
},
{ path: 'pages',
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
},
{
  path: '**',
  redirectTo: '/error',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
