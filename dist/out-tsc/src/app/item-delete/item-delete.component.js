import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ItemDeleteComponent = class ItemDeleteComponent {
    constructor(itemService, route, router) {
        this.itemService = itemService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getItemById(id);
        this.itemId = id;
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
    deleteItem() {
        this.itemService.deleteItem(this.itemId).subscribe(next => {
            this.router.navigateByUrl("/items").then(success => console.log("success to delete item"));
        }, error => {
            console.log("fail to delete item");
        });
    }
};
ItemDeleteComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-delete',
        templateUrl: './item-delete.component.html',
        styleUrls: ['./item-delete.component.css']
    })
], ItemDeleteComponent);
export { ItemDeleteComponent };
//# sourceMappingURL=item-delete.component.js.map