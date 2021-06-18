import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { AnimesComponent } from './animes/animes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DevlogModalComponent } from './devlog-modal/devlog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    AnimesComponent,
    DevlogModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
