import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-notes-page',
    templateUrl: './notes-page.component.html',
    styleUrls: ['./notes-page.component.scss'],
})
export class NotesPageComponent implements OnInit {
    timePeriods = [
        'Bronze age',
        'Iron age',
        'Middle ages',
        'Early modern period',
        `  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime minus corrupti laboriosam,
        quae deleniti modi, necessitatibus tenetur dolorem quasi quibusdam ut eveniet laborum est,
        nulla alias expedita officiis consequatur provident?`,
        'Long nineteenth century',
        'Early modern period',
        'Long nineteenth century',
        'Early modern period',
        'Long nineteenth century',
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }

    constructor() {}

    ngOnInit(): void {}
}
