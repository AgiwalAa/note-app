import { Injectable } from '@angular/core';
import { Note, ActionMethod } from "../note";
import { DataStorageService } from "./data-storage.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class NotesDataService {
  constructor(private dataStorageService: DataStorageService) { }

  save(note: Note, actionMethod: any) {
    if (actionMethod == "Add") {
      return (this.dataStorageService.saveData(note));
    }
    else{
      return (this.dataStorageService.updateData(note));
    }
  }

  retrieve() : Note[] {    
    return this.dataStorageService.retrieveAll();
  }

  delete(note : Note){
   return this.dataStorageService.deleteData(note);
  }
}
