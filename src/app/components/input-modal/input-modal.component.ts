import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as uuid from 'uuid';
import * as moment from 'moment';
import { Note } from 'src/app/types/notes';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss'],
})
export class InputModalComponent implements OnInit {
  @Output() addNewNote = new EventEmitter();
  showModalText = false;
  constructor() {}

  ngOnInit(): void {}

  tempNote: Note = {
    id: uuid.v4(),
    title: '',
    description: '',
    data: moment().format('DD/MM/YYYY'),
  };

  onShow = () => [(this.showModalText = !this.showModalText)];

  cleanFields() {
    this.tempNote = {
      id: uuid.v4(),
      title: '',
      description: '',
      data: moment().format('DD/MM/YYYY'),
    };
  }

  closeModal(): void {
    this.onShow();
    this.cleanFields();
  }

  onChangeTitle(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.tempNote.title = target.value;
  }
  onChangeDescription(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.tempNote.description = target.value;
  }

  addNote(): void {
    if (this.tempNote.title === '' || this.tempNote.description === '') {
      return alert('Please verify Fields');
    }
    this.addNewNote.emit(this.tempNote);
    this.showModalText = false;
    this.cleanFields();
  }
}
