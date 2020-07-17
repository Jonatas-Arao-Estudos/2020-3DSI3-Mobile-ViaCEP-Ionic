import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'consultaCEP',
        loadChildren: () => import('../pages/consulta-cep/consulta-cep.module').then(m => m.ConsultaCEPPageModule)
      },
      {
        path: '',
        redirectTo: '/consultaCEP',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/consultaCEP',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
