import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RoutesPageComponent } from './components/routes-page/routes-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
const routes: Routes = [
	{path: '',component: HomePageComponent},
	{path: 'routes',component: RoutesPageComponent},
	{path: 'login',component: LoginPageComponent},
	{path: 'register',component: RegisterPageComponent},
	{path: '**',component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
