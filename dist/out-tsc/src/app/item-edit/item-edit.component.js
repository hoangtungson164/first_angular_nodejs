import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ItemEditComponent = class ItemEditComponent {
    constructor(itemService, router, route) {
        this.itemService = itemService;
        this.router = router;
        this.route = route;
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
    updateItem() {
        this.itemService.createItem(this.item).subscribe(next => {
            console.log('success to create new item');
            this.router.navigateByUrl('/items');
        }, error => {
            console.log('fail to create new item');
        });
    }
};
ItemEditComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-edit',
        templateUrl: './item-edit.component.html',
        styleUrls: ['./item-edit.component.css']
    })
], ItemEditComponent);
export { ItemEditComponent };
//# sourceMappingURL=item-edit.component.js.map