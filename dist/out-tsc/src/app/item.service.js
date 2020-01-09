import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
const URL = environment.apiUrl;
let ItemService = class ItemService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.itemURL = URL + '/items';
    }
    getItemById(id) {
        return this.httpClient.get(`${this.itemURL}/${id}`);
    }
    getItems(count = 10) {
        return this.httpClient.get(this.itemURL).pipe(map(data => data.filter((todo, i) => i < count)));
    }
    createItem(item) {
        return this.httpClient.post(this.itemURL, item);
    }
    updateItem(item) {
        return this.httpClient.put(`${this.itemURL}/${item.id}`, item);
    }
    deleteItem(id) {
        return this.httpClient.delete(`${this.itemURL}/${id}`);
    }
};
ItemService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ItemService);
export { ItemService };
//# sourceMappingURL=item.service.js.map