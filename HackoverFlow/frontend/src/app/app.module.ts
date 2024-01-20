import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SideBarComponent } from './modules/side-bar/side-bar.component';
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { StartDataPipelineComponent } from './pages/start-data-pipeline/start-data-pipeline.component';
import { MealPlantSelectionComponent } from './pages/meal-plant-selection/meal-plant-selection.component';
import { KitchenMenuComponent } from './pages/kitchen-menu/kitchen-menu.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { EmployeeSelectionDetailComponent } from './pages/employee-selection-detail/employee-selection-detail.component';
import { GuestSelectionDetailComponent } from './pages/guest-selection-detail/guest-selection-detail.component';
import { SummarizeComponent } from './pages/summarize/summarize.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    SideBarComponent,
    StartDataPipelineComponent,
    MealPlantSelectionComponent,
    KitchenMenuComponent,
    LoginComponent,
    EmployeeSelectionDetailComponent,
    GuestSelectionDetailComponent,
    AccountingComponent,
    SummarizeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
