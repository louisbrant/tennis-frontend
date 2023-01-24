import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { H2hSearchSoccerClubsComponent } from './h2h-search-soccer-clubs/h2h-search-soccer-clubs.component';
import { SharedModule } from "../../shared/shared.module";
import { H2hSearchTennisAtpComponent } from './h2h-search-tennis-atp/h2h-search-tennis-atp.component';



@NgModule({
  declarations: [
    HomeComponent,
    H2hSearchSoccerClubsComponent,
    H2hSearchTennisAtpComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
