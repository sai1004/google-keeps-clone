import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenusList } from './models/MenusList';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    screenWidth: number = 0;
    searchQuery: string = '';
    menusList: MenusList[] = [
        {
            id: '',
            name: 'Notes',
            route: 'notes',
            icon: 'notes',
            priority: 11,
        },
        // {
        //     id: '',
        //     name: 'Edit Labels',
        //     route: '',
        //     icon: 'edit',
        //     priority: 11,
        // },
        {
            id: '',
            name: 'Archive',
            route: 'archive',
            icon: 'archive',
            priority: 11,
        },
        {
            id: '',
            name: 'Trash',
            route: 'trash',
            icon: 'delete',
            priority: 11,
        },
    ];
    constructor() {
        this.setSideNavResponse();
    }

    ngOnInit() {}

    setSideNavResponse() {
        this.screenWidth = window.innerWidth;
        window.onresize = () => {
            // set screenWidth on screen size change
            this.screenWidth = window.innerWidth;
        };
    }
}
