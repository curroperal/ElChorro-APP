import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RoutesPageComponent } from './components/routes-page/routes-page.component';

const routes: Routes = [
	{path: '',component: HomePageComponent},
	{path: 'routes',component: RoutesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
