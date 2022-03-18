import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { ArchivePageComponent } from './pages/archive-page/archive-page.component';
import { TrashPageComponent } from './pages/trash-page/trash-page.component';
import { NotesCardComponent } from './components/notes-card/notes-card.component';
import { NotesInputBoxComponent } from './components/notes-input-box/notes-input-box.component';

@NgModule({
    declarations: [
        AppComponent,
        NotesPageComponent,
        ArchivePageComponent,
        TrashPageComponent,
        NotesCardComponent,
        NotesInputBoxComponent,
        TrashPageComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
