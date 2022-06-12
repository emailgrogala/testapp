import { Component, OnInit } from '@angular/core';
import { Note } from '../notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  note: Note = {
    id: 1,
    title: "First note",
    description: "test display for new first note"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
