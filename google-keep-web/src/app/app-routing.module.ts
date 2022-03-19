import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivePageComponent } from './pages/archive-page/archive-page.component';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';
import { TrashPageComponent } from './pages/trash-page/trash-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'notes' },
    {
        path: 'notes',
        component: NotesPageComponent,
    },
    {
        path: 'archive',
        component: ArchivePageComponent,
    },
    {
        path: 'trash',
        component: TrashPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
