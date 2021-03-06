import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import Homee
import { HomeComponent } from './components/home.component';

//import user
import { UserEditComponent } from './components/user-edit.component';

//import Artist:
import { ArtistListComponent } from './components/artist-list.component';


const appRoutes: Routes = [
	//{ //esto es para redireccionar
	//	path:'',
	//	redirectTo: '/artists/1',
	//	pathMatch: 'full'
	//},
	{path: '', component: HomeComponent},
	{path: 'artists/:page', component: ArtistListComponent},
	{path: 'mis-datos', component: UserEditComponent},
	{path: '**', component: HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
