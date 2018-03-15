import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class SharedService {
  // Shared Service
  public IsUserMadeChanges: Subject<boolean> = new Subject<boolean>();
  constructor() { }
}
