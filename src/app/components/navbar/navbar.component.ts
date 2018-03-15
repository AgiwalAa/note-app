import { Component, OnInit } from '@angular/core';
import { Note } from "../../note";
import { NotesDataService } from "../../services/notes-data.service";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notesList : Note[] = [];
  selectedNote : Note;
  isUserMadeChanges : boolean;
  constructor( private sharedService: SharedService, private notesDataService : NotesDataService ) { }

  ngOnInit() {
  this.notesList = this.notesDataService.retrieve();
  this.sharedService.IsUserMadeChanges.subscribe(value => {
   if(value){
    this.notesList = this.notesDataService.retrieve();
   }
  })
  }

  listClick(note){
  this.selectedNote = note;
  }
}
