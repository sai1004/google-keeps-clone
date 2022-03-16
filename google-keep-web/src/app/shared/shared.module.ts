import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpService } from './services/http.service';
import { AppService } from './services/app.service';
import { AppInterceptor } from './services/app.interceptor';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<NgModule> {
        return {
            ngModule: SharedModule,
            providers: [
                HttpService,
                AppService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AppInterceptor,
                    multi: true,
                },
            ],
        };
    }
}
