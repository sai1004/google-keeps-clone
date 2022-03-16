import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class LoadService {
    loadUrl: string = 'load';

    constructor(private _http: HttpService) {}

    async getLoadService(lovType: any) {
        const result = await this._http.get(this.loadUrl + `?id=${lovType}`);
        return result;
    }
}
