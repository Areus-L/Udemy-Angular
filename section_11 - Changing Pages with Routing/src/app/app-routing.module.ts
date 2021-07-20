import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent}, //localhost:4200/
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent} //localhost:4200/user/1/Max
  ]}, //localhost:4200/users
  { path: 'servers', canActivate:[AuthGuard], component: ServersComponent, children: [
    { path: ':id', component: ServerComponent}, //localhost:4200/servers/3
    { path: ':id/edit', component: EditServerComponent} //localhost:4200/servers/2/edit
  ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'} //have to be the last row
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class ApproutingModule {

}
