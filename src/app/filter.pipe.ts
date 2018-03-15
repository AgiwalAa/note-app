import { Pipe, PipeTransform } from '@angular/core';
import { Note } from "./note";
@Pipe({
    name: 'filter'
  })

  export class FilterPipe implements PipeTransform {
    
      transform(notesList: Note[], searchKey: string): any {

        if(searchKey === undefined) return notesList;
        
        searchKey = searchKey.toLowerCase();

        return notesList.filter( value =>{
            return value.description.toLowerCase().includes(searchKey)})
        }}