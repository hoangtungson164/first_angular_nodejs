import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ItemComponent = class ItemComponent {
    constructor(itemService, route, router) {
        this.itemService = itemService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getItemById(id);
    }
    getItemById(id) {
        this.itemService.getItemById(id).subscribe(next => {
            this.item = next;
            console.log(this.item);
            console.log('success to get item ' + next.name);
        }, error => {
            console.log('fail to get item');
        });
    }
};
ItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.css']
    })
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.component.js.map