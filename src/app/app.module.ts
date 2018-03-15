import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {TimeAgoPipe} from 'time-ago-pipe';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotesDetailComponent } from './components/notes-detail/notes-detail.component';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { NotesDataService } from "./services/notes-data.service";
import { DataStorageService } from "./services/data-storage.service";
import { SharedService } from "./services/shared.service";
import { FilterPipe } from "./filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimeAgoPipe,
    NotesDetailComponent,
    FilterPipe    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [FlashMessagesService,NotesDataService,SharedService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
