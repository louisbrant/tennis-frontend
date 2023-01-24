import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ClickOutsideModule } from 'ng-click-outside';
// module end

//   component   //
import { TempComponent } from './temp/temp.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared //
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SharedModule } from "./shared/shared.module";


// tennis //
import { HomeModule } from "./pages/home/home.module";
import { H2hModule } from "./pages/h2h/h2h.module";
import { ProfileModule } from "./pages/profile/profile.module";
import { TournamentModule } from "./pages/tournament/tournament.module";
import { CalendarModule } from "./pages/calendar/calendar.module";
import { RankingsModule } from "./pages/rankings/rankings.module";
import { MatchesModule } from "./pages/matches/matches.module";
import { H2hListModule } from "./pages/h2h-list/h2h-list.module";
import { ElasticSearchModule } from "./pages/elastic-search/elastic-search.module";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TempComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    ProfileModule,
    SharedModule,
    ReactiveFormsModule,
    H2hModule,
    TournamentModule,
    CalendarModule,
    RankingsModule,
    ElasticSearchModule,
    ClickOutsideModule,
    HomeModule,
    MatchesModule,
    H2hListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
