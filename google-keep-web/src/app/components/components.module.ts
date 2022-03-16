import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { NotesInputBoxComponent } from './notes-input-box/notes-input-box.component';
import { NotesCardComponent } from './notes-card/notes-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [SideNavbarComponent, NotesInputBoxComponent, NotesCardComponent],
    imports: [CommonModule, SharedModule],
    exports: [SideNavbarComponent, NotesInputBoxComponent, NotesCardComponent],
})
export class ComponentsModule {}
