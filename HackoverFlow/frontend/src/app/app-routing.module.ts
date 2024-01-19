import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import {ListDatapipelineComponent} from "./pages/datapipeline/pages/list-datapipeline/list-datapipeline.component";
import { StartDataPipelineComponent } from './pages/start-data-pipeline/start-data-pipeline.component';
import { MealPlantSelectionComponent } from './pages/meal-plant-selection/meal-plant-selection.component';
import { LoginOptionComponent } from './pages/login-option/login-option.component';
import { KitchenCrewLoginPageComponent } from './pages/kitchen-crew-login-page/kitchen-crew-login-page.component';
import { EmployeeLoginPageComponent } from './pages/employee-login-page/employee-login-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: 'datapipeline',component: ListDatapipelineComponent},
  { path: 'startpipeline',component: StartDataPipelineComponent},
  { path: 'mealPlan',component: MealPlantSelectionComponent},
  { path: 'login',component: LoginOptionComponent},
  { path: 'kitchen-crew-login', component:KitchenCrewLoginPageComponent },
  { path: 'employee-login-page', component:EmployeeLoginPageComponent }

  // TODO
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
