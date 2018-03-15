import { Injectable } from '@angular/core';
import { Note } from "../note";
import { NotesDataService } from "./notes-data.service";

@Injectable()
export class DataStorageService {
  storageName: string = "notes";
  notesList: Note[] = [];
  success: boolean;
  index: number = -1;
  toDelete: boolean = false;
  constructor() { }

  // Push new notes to localStorage
  saveData(note: Note): boolean {
    this.success = false;
    this.notesList = this.retrieveAll();
    this.notesList.push(note);
    localStorage.setItem(this.storageName, JSON.stringify(this.notesList));
    return !this.success;
  }

  // Update existing notes in localStorage
  updateData(note: Note) {
    this.success = false;
    if (this.traverseNotes(note) >= 0) {
      this.notesList[this.index] = note;
      localStorage.setItem(this.storageName, JSON.stringify(this.notesList));
      this.success = true;
    }
    return this.success;
  }

  // Delete a note from localStorage
  deleteData(note: Note): boolean {
    this.success = false;
    this.index = this.traverseNotes(note)
    if (this.index >= 0) {
      this.notesList.splice(this.index, 1);
      localStorage.setItem(this.storageName, JSON.stringify(this.notesList));
      this.success = true;
    }
    return this.success;
  }

  // Retrieve all notes from localStorage
  retrieveAll(): Note[] {
    this.notesList = [];
    if (localStorage.getItem(this.storageName) != null) {
      this.notesList = JSON.parse(localStorage.getItem(this.storageName));
    }
    return this.notesList;
  }

  // Traverse through the notes
  traverseNotes(note : Note): number {
    this.notesList = this.retrieveAll();
    for (this.index = 0; this.index < this.notesList.length; this.index++) {
      if (this.notesList[this.index].id == note.id) {
        break;
      }
    }
    return this.index;
  }
}
