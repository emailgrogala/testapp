import { Component, OnInit } from '@angular/core';
import { Note } from '../notes';
import { NOTES } from '../mock-notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  // noteTest: Note = {
  //   id: 1,
  //   title: "First note",
  //   description: "test display for new first note"
  // };
  notes = NOTES;
  selectedNote?: Note;
  isShown: boolean = false;
  isHide: boolean = false;
  storeShownNoteNumber:Number=0;

  constructor() { }

  ngOnInit(): void {
    console.log("Init : " + this.selectedNote)
  }
  
  onSelect(note:Note):void {
    if((this.selectedNote = note)){
      this.isShown =! this.isShown

      if(this.isShown){
        this.storeShownNoteNumber = this.selectedNote.id
      } else {
        this.storeShownNoteNumber = 0
      }

    }

   
    console.log("selectedNote: " + this.selectedNote.id);
    console.log("isShown: " + this.isShown);
    console.log("isHide: " + this.isHide + " note to hide: " + note.id);
    console.log("showNoteNumber: " + this.storeShownNoteNumber);
  }
}
