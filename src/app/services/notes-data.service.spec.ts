import { TestBed, inject } from '@angular/core/testing';

import { NotesDataService } from './notes-data.service';

describe('NotesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesDataService]
    });
  });

  it('should be created', inject([NotesDataService], (service: NotesDataService) => {
    expect(service).toBeTruthy();
  }));
});
