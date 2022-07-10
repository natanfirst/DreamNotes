import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/types/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  constructor() {}

  ngOnInit(): void {}

  onAddNote(value: Note): void {
    this.notes.push(value);
    console.log(this.notes);
  }
}
