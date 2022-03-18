import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-notes-input-box',
    templateUrl: './notes-input-box.component.html',
    styleUrls: ['./notes-input-box.component.scss'],
})
export class NotesInputBoxComponent implements OnInit {
    @Output()
    notesEmitter: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
