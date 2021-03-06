import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'ticket', loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
