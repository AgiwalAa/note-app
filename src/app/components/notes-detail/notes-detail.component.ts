import { Component, OnInit, Input } from '@angular/core';
import { Note, ActionMethod } from "../../note";
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service'
import { NotesDataService } from "../../services/notes-data.service";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {
  @Input()
  note: Note
  constructor(private sharedService: SharedService, private flashMessage: FlashMessagesService, private notesDataService: NotesDataService) { }

  ngOnInit() {
  }

  newNote() {
    this.note = new Note("", "", "");
  }

  //Save a note - Add if new or update if existing
  saveNote(note: Note) {
    if (note.id) {
      if (this.notesDataService.save(note, ActionMethod.update)) {
        this.sharedService.IsUserMadeChanges.next(true);
        this.displayMessage('Saved', 'alert-success')
      }
      else {
        this.displayMessage('Please try again', 'alert-danger')
      }
    }
    else {
      note.id = this.getRandomId().toString();
      note.timeStamp = Date.now().toString();
      if (this.notesDataService.save(note, ActionMethod.add)) {
        this.sharedService.IsUserMadeChanges.next(true);
        this.displayMessage('Saved', 'alert-success')
      }
      else {
        this.displayMessage('Please try again', 'alert-danger')
      }
    }
  }

  checkDisabled(note :Note){
    return typeof note !== 'undefined' && (typeof note.description !== 'undefined' || typeof note.id !== 'undefined')
  }

  // Delete a note
  deleteNote(note : Note) {
    if (this.notesDataService.delete(note)) {
      this.note.description = "";
      this.displayMessage('Delete', 'alert-success');
      this.sharedService.IsUserMadeChanges.next(true);
    }
    else {
      this.displayMessage('Please try again', 'alert-danger')
    }
  }

  //Display message to user
  displayMessage(msg, alertClass) {
    this.flashMessage.show(msg, { cssClass: alertClass, timeout: 1000 })
  }

  //Generate a random number for note's id
  getRandomId() {
    return Math.floor((Math.random() * 6) + 1);
  }
}
