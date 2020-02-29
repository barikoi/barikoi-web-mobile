import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RupantorComponent } from './components/rupantor/rupantor.component';
import { UrbanEngineComponent } from './components/urban-engine/urban-engine.component';
import { ApiComponent } from './components/api/api.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rupantor', component: RupantorComponent },
  { path: 'urban-engine', component: UrbanEngineComponent },
  { path: 'api', component: ApiComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
