import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ItemListComponent = class ItemListComponent {
    constructor(itemService, tokenService) {
        this.itemService = itemService;
        this.tokenService = tokenService;
    }
    ngOnInit() {
        this.token = this.tokenService.getToken();
        console.log(this.tokenService.getToken);
        console.log('something running');
        this.itemService.getItems(100).subscribe(next => {
            this.items = next;
            console.log('success to get items');
        }, error => {
            console.log('fail to get items');
        });
    }
};
ItemListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-list',
        templateUrl: './item-list.component.html',
        styleUrls: ['./item-list.component.css']
    })
], ItemListComponent);
export { ItemListComponent };
//# sourceMappingURL=item-list.component.js.map